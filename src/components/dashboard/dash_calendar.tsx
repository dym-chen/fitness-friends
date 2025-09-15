import { INutritionEntry } from "@/types/index";

interface DashboardCalendarProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

export const DashboardCalendar = ({
  userId,
  entries,
}: DashboardCalendarProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800">Calendar</h2>
    </div>
  );
};
