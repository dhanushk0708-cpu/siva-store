import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://hjfbhtawjbwnuztjzkyt.supabase.co";

const supabaseKey =
  "sb_publishable_Apw5g9M1WEedOPf-6QO7FA_5t77MSzB";

const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );

export default supabase;