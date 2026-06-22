import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!url || !anonKey) {
  console.warn("Supabase env vars missing — free trial form will not persist submissions.");
}

export const supabase = createClient(url ?? "", anonKey ?? "", {
  auth: { persistSession: false },
});

export type FreeTrial = {
  id: string;
  name: string;
  email: string;
  phone: string;
  goal: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  experience_level: string | null;
  message: string | null;
  status: string;
  created_at: string;
};
