import { supabase } from "@/lib/supabase";

export type INutritionEntry = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  goal: number;
  cal_food: number;
  cal_exercise: number;
};

export const getNutritionEntries = async (
  userId: string
): Promise<INutritionEntry[] | null> => {
  const { data, error } = await supabase
    .from("nutrition_entries")
    .select("*")
    .eq("user_id", userId); // filter by user ID

  if (error) {
    console.error("Fetch error:", error.message);
    return null;
  }

  // console.log("Fetched data:", data);
  return data;
};
