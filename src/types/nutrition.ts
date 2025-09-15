export interface INutritionEntry {
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
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  created_at: string;
  cal_goal: number;
  protein_goal: number;
  carb_goal: number;
  fat_goal: number;
}
