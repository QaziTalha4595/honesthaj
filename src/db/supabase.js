
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glqpqmxowaoicrekkhlv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdscXBxbXhvd2FvaWNyZWtraGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyOTEyMTIsImV4cCI6MjA0MDg2NzIxMn0.bvhDmysmp6qw2haM-BK8YuGw48Hw-Z0aLmE2JMvUBfM";

export const supabase = createClient(supabaseUrl, supabaseKey);
        
