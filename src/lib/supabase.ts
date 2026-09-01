import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export default function Supabase() {

  if (!supabaseInstance) {
    const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabase_service_key = process.env.SUPABASE_SECRET_KEY!;
    
    supabaseInstance = createClient(supabase_url, supabase_service_key);
  }

  return supabaseInstance;
}