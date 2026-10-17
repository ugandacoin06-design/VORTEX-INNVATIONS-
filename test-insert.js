import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.from('contact_submissions').insert([{
    name: 'test',
    email: 'test@example.com',
    reason: 'test',
    subject: 'test',
    message: 'test'
  }]);
  console.log("Insert Data:", data);
  console.log("Insert Error:", error);
}
run();
