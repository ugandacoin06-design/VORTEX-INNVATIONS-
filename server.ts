import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const rateLimitMap = new Map<string, number>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      // Basic Rate Limiting
      const ip = req.ip || req.socket.remoteAddress || 'unknown';
      const now = Date.now();
      const lastRequestTime = rateLimitMap.get(ip);
      if (lastRequestTime && now - lastRequestTime < 10000) {
        return res.status(429).json({ error: "Too many requests. Please wait a moment before sending another message." });
      }
      rateLimitMap.set(ip, now);

      let { name, email, organization, reason, subject, message } = req.body;

      // Sanitization
      name = name?.trim() || '';
      email = email?.trim().toLowerCase() || '';
      organization = organization?.trim() || '';
      reason = reason?.trim() || '';
      subject = subject?.trim() || '';
      message = message?.trim() || '';

      // Validation
      if (!name) return res.status(400).json({ error: "Full Name is required." });
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "A valid Email Address is required." });
      }
      if (!message || message.length < 10 || message.length > 3000) {
        return res.status(400).json({ error: "Message must be between 10 and 3000 characters." });
      }

      // We still validate reason/subject because they're part of the design.
      if (!reason) return res.status(400).json({ error: "Reason for contact is required." });
      if (!subject) return res.status(400).json({ error: "Subject is required." });

      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ error: "Database configuration is missing. The administrator must connect a database to receive messages." });
      }

      const supabase = createClient(supabaseUrl, supabaseKey);

      // Insert new submission
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { name, email, organization, reason, subject, message }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        
        // Handle race-condition unique constraint violations (Postgres code 23505)
        if (error.code === '23505') {
          return res.status(409).json({ code: "EMAIL_ALREADY_EXISTS", error: "We already have a message associated with this email address. Please use a different email address." });
        }
        
        return res.status(500).json({ error: "Failed to save the message to the database." });
      }

      res.status(200).json({ success: true, message: "Contact submission recorded." });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
