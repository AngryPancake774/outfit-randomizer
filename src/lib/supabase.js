import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ogajvyvmymvokznqvpxg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nYWp2eXZteW12b2t6bnF2cHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MTk4NzUsImV4cCI6MjA3MzE5NTg3NX0.VBbScKxQG340MIlsAZuCYIZO86EfLNuuKXmOS6tzrpQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
