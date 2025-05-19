"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { HorizontalSeparator } from "../components/ui_elements";
import { MacroBox } from "../components/dashboard/macro_box";
import { DailyBox } from "../components/dashboard/daily_box";
import { DashboardCalendar } from "../components/dashboard/dash_calendar";
import { DashboardLineChart } from "../components/dashboard/dash_line";
import { DashboardGrid } from "../components/dashboard/dash_grid";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                Fitness Friends
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="text-blue-600 hover:text-blue-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <DashboardGrid />
        <HorizontalSeparator />
        <div className="space-y-4">
          <div className="flex "></div>
          <div className="grid grid-cols-2 gap-6">
            <DailyBox userId={user?.id} />
            <MacroBox userId={user?.id} />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <DashboardLineChart userId={user?.id} />
            <DashboardCalendar />
          </div>
        </div>
      </main>
    </div>
  );
}
