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
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7); // 7 days ago

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
