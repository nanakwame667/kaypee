import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mljogeehlbrneouyezvt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sam9nZWVobGJybmVvdXllenZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNTU5OTgsImV4cCI6MjA1ODkzMTk5OH0.P3TwfAb5HjDRFOodEClsY43samY1s71g1Awup_Apisc";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchProjects = async () => {
  try {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) throw error;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching projects:", error.message);
    } else {
      console.error("Error fetching projects:", error);
    }
    return [];
  }
};

export default supabase;
