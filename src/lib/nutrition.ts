import { supabase } from "@/lib/supabase";
import { INutritionEntry } from "@/types/index";

export const getNutritionEntries = async (
  userId: string, start?: string, end?: string
): Promise<INutritionEntry[] | null> => {
  const endDate = end? new Date(end): new Date();
  const startDate = start ? new Date(start) : new Date();
  
  if (!start && !end) { // Default to the last 7 days
    startDate.setDate(startDate.getDate() - 7); 
  }

  const { data, error } = await supabase
    .from("nutrition_entries")
    .select("*")
    .eq("user_id", userId)
    .gte("created_at", startDate.toISOString())
    .lte("created_at", endDate.toISOString());

  if (error) {
    console.error("Fetch error:", error.message);
    return null;
  }

  return data;
};
