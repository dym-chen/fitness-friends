import { supabase } from "@/lib/supabase";

export const getGroupchats = async () => {

    const { data, error } = await supabase
        .from("groups")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Fetch error:", error.message);
        return null;
    }

    return data;
};
