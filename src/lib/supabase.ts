import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type EmailSubmission = {
  id: string;
  email: string;
  source_page: 'product' | 'pricing' | 'time-audit';
  industry?: string;
  time_saved?: string;
  cost_savings?: string;
  created_at: string;
};