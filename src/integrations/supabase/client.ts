// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ilomdzrwmqchhudmigrx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsb21kenJ3bXFjaGh1ZG1pZ3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTEzNjAsImV4cCI6MjA2Njc4NzM2MH0.LO3CdT_p6TMBIUeI0T1UeMzqD4--F2EaLJoNAo2jHp8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});