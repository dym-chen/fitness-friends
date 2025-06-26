"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { INutritionEntry } from "@/lib/nutrition_entries";

Chart.register(ArcElement, Tooltip);

interface MacroBoxProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

export const MacroBox = ({ userId, entries }: MacroBoxProps) => {
  const entry = entries && entries.length > 0 ? entries[0] : null;
  const proteinGoal = 150;
  const carbsGoal = 200;
  const fatGoal = 65;
  const proteinConsumed = entry?.protein ?? 0;
  const carbsConsumed = entry?.carbs ?? 0;
  const fatConsumed = entry?.fat ?? 0;

  console.log(userId);

  const createMacroData = (consumed: number, goal: number, color: string) => ({
    datasets: [
      {
        data: [consumed, goal - consumed],
        backgroundColor: [color, "#e5e7eb"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  });

  const options = {
    cutout: "80%",
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Macros</h2>
      <div className="grid grid-cols-3 gap-8">
        {/* Protein Chart */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-3">
            <Doughnut
              data={createMacroData(proteinConsumed, proteinGoal, "#4ade80")}
              options={options}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="text-2xl font-bold text-gray-800">
                {proteinConsumed}g
              </h3>
              <p className="text-sm font-medium text-gray-600">protein</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              Goal: {proteinGoal}g
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((proteinConsumed / proteinGoal) * 100).toFixed(0)}% of goal
            </p>
          </div>
        </div>

        {/* Carbs Chart */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-3">
            <Doughnut
              data={createMacroData(carbsConsumed, carbsGoal, "#60a5fa")}
              options={options}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="text-2xl font-bold text-gray-800">
                {carbsConsumed}g
              </h3>
              <p className="text-sm font-medium text-gray-600">carbs</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              Goal: {carbsGoal}g
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((carbsConsumed / carbsGoal) * 100).toFixed(0)}% of goal
            </p>
          </div>
        </div>

        {/* Fat Chart */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-3">
            <Doughnut
              data={createMacroData(fatConsumed, fatGoal, "#fbbf24")}
              options={options}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="text-2xl font-bold text-gray-800">
                {fatConsumed}g
              </h3>
              <p className="text-sm font-medium text-gray-600">fat</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              Goal: {fatGoal}g
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((fatConsumed / fatGoal) * 100).toFixed(0)}% of goal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
