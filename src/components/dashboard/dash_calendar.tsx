import { INutritionEntry } from "@/lib/nutrition_entries";

interface DashboardCalendarProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

export const DashboardCalendar = ({
  userId,
  entries,
}: DashboardCalendarProps) => {
  console.log(userId);
  console.log(entries);
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800">Calendar</h2>
    </div>
  );
};
