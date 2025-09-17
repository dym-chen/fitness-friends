import { INutritionEntry } from "@/types/index";
import { Calendar } from "@/components/general/calendar";
import { useMemo, useState } from "react";

interface DashboardCalendarProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

export const DashboardCalendar = ({
  userId,
  entries,
}: DashboardCalendarProps) => {
  type CalendarValue = Date | Date[] | null;
  const [value, setValue] = useState<Date>(new Date());

  const entryDates = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((e) => {
      const d = e.created_at?.slice(0, 10);
      if (d) set.add(d);
    });
    return set;
  }, [entries]);

  const handleSelect = (day?: Date) => {
    if (day) setValue(day);
  };

  const hasEntry = (day: Date) => {
    return entryDates.has(day.toISOString().slice(0, 10));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 col-span-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Calendar</h2>
      <Calendar
        mode="single"
        selected={value}
        onSelect={handleSelect}
        modifiers={{ hasEntry }}
        modifiersClassNames={{
          hasEntry:
            "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-green-400",
        }}
      />
    </div>
  );
};
