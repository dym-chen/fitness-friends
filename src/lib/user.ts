import { supabase } from "@/lib/supabase";
import { IUser } from "@/types/index";

export const getUserById = async (userId: string): Promise<IUser | null> => {
  if (!userId) {
    console.error("User ID is required");
    return null;
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Fetch error:", error.message);
    return null;
  }

  return data as IUser;
};
