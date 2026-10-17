import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.from('contact_submissions').select('id').ilike('email', 'test2@example.com').limit(1);
  console.log("Data:", data);
  console.log("Error:", error);
}
run();
