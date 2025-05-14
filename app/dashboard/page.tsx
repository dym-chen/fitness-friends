"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { HorizontalSeparator } from "../components/ui_elements";
import { MacroBox } from "../components/macro_box";
import { DailyBox } from "../components/daily_box";

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
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workout Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Today&apos;s Workout
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Track your exercises and progress
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/workout"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Log Workout
                  </Link>
                </div>
              </div>
            </div>

            {/* Nutrition Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Nutrition</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Track your daily food intake
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/nutrition"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Log Food
                  </Link>
                </div>
              </div>
            </div>

            {/* Progress Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Progress</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View your fitness journey
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/progress"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Progress
                  </Link>
                </div>
              </div>
            </div>

            {/* Online Classes Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Join Classes
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  View available online fitness classes
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/workout"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Classes
                  </Link>
                </div>
              </div>
            </div>

            {/* Workout Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  View Recipe Board
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Post and view recipes from others
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/workout"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Recipe Board
                  </Link>
                </div>
              </div>
            </div>

            {/* Workout Tracking Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Join a Community
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Create or join a community of fitness enthusiasts
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/workout"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Communities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HorizontalSeparator />

        <div className="space-y-4">
          <div className="flex "></div>
          <div className="grid grid-cols-2 gap-6">
            <DailyBox />
            <MacroBox />
          </div>
          <div className="grid grid-cols-3 gap-6"></div>
        </div>
      </main>
    </div>
  );
}
