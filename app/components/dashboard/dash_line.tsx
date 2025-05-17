import { getNutritionEntries, INutritionEntry } from "@/lib/nutrition_entries";
import { useEffect, useState } from "react";

interface DashboardLineChartProps {
  userId: string | undefined;
}

export const DashboardLineChart = ({ userId }: DashboardLineChartProps) => {
  const [entries, setEntries] = useState<INutritionEntry[] | null>(null);

  useEffect(() => {
    async function fetchEntries() {
      const data = userId ? await getNutritionEntries(userId) : [];
      setEntries(data);
    }
    fetchEntries();
  }, [userId]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 col-span-2">
      <h2 className="text-lg font-semibold text-gray-800">Daily Graph</h2>
    </div>
  );
};
