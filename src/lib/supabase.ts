import { SupabaseClient, createClient } from "@supabase/supabase-js";

// 1. Create a variable outside the function to store the single instance
let supabaseInstance: SupabaseClient | null = null;

export default function Supabase() {
  // 2. Only initialize if it doesn't exist yet
  if (!supabaseInstance) {
    const supabase_url = process.env.SUPABASE_URL!;
    const supabase_secret_key = process.env.SUPABASE_SECRET_KEY!;
    
    supabaseInstance = createClient(supabase_url, supabase_secret_key);
  }

  // 3. Always return the same instance
  return supabaseInstance;
}
