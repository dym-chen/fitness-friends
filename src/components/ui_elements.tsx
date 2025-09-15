import { DailyBox } from "@/components/dashboard/daily_box";
import { MacroBox } from "@/components/dashboard/macro_box";
import { DashboardLineChart } from "@/components/dashboard/dash_line";
import { DashboardCalendar } from "@/components/dashboard/dash_calendar";
import { DashboardGrid } from "@/components/dashboard/dash_grid";

export {
  DailyBox,
  MacroBox,
  DashboardLineChart,
  DashboardCalendar,
  DashboardGrid,
};

export const HorizontalSeparator = () => (
  <hr className="my-4 border-t border-gray-300 border-4 rounded-xs" />
);
