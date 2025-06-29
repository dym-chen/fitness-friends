import { supabase } from "@/lib/supabase";

export const getMessages = async (groupId: string) => {
    if (!groupId) {
        console.error("Group ID is required");
        return null;
    }

    const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("group_id", groupId)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Fetch error:", error.message);
        return null;
    }

    return data;
};
