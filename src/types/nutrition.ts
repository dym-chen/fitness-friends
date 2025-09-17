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

export interface IExercise {
  id: string;
  name: string;
  gifUrl: string;
  target: string;
  bodyPart: string;
  equipment: string;
  secondaryMuscles: string[];
  instructions: string[];
}
