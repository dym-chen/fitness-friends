import { supabase } from "@/lib/supabase";
import { INutritionEntry } from "@/types/index";

export const getNutritionEntries = async (
  userId: string, start?: string, end?: string
) => {
  let query = supabase.from("nutrition_entries")
    .select("*")
    .eq("user_id", userId);

  if (start) {
    query = query.gte("created_at", new Date(start).toISOString());
  }

  if (end) {
    query = query.lte("created_at", new Date(end).toISOString());
  }

  const { data, error } = await query;

  if (error) {
    console.error("Fetch error:", error.message);
    return null;
  }

  return data;
};
