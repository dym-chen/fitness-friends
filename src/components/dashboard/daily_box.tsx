"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { INutritionEntry } from "@/lib/nutrition_entries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faUtensils, faFire } from "@fortawesome/free-solid-svg-icons";

Chart.register(ArcElement, Tooltip);

interface DailyBoxProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

export const DailyBox = ({ userId, entries }: DailyBoxProps) => {
  const entry = entries && entries.length > 0 ? entries[0] : null;
  const goal = entry?.goal ?? 0;
  const food = entry?.cal_food ?? 0;
  const exercise = entry?.cal_exercise ?? 0;
  const remaining = goal - food + exercise;

  console.log(userId);

  const data = {
    datasets: [
      {
        data:
          remaining == goal
            ? [100, 0]
            : [100 - (remaining / goal) * 100, (remaining / goal) * 100],
        backgroundColor:
          remaining == goal ? ["#e5e7eb"] : ["#e5e7eb", "#4ade80"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const options = {
    cutout: "80%",
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Calories</h2>
      <p className="text-m text-gray-500 mb-6">
        Remaining = Goal - Food + Exercise
      </p>
      <div className="flex items-center justify-between">
        {/* Left: Doughnut Chart */}
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="relative w-32 h-32">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="text-2xl font-bold text-gray-800">
                {remaining.toFixed(2)}
              </h3>
              <p className="text-sm font-medium text-gray-500">Remaining</p>
            </div>
          </div>
        </div>
        {/* Right: Details with Icons */}
        <div className="flex flex-col gap-4 pl-8">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faFlag} className="text-gray-600 w-6 h-6" />
            <div className="flex flex-col justify-center">
              <span className="text-gray-600 text-sm">Base Goal</span>
              <span className="font-bold text-lg text-gray-900">
                {goal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-blue-500 w-6 h-6"
            />
            <div className="flex flex-col justify-center">
              <span className="text-gray-600 text-sm">Food</span>
              <span className="font-bold text-lg text-gray-900">
                {food.toFixed(0)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faFire}
              className="text-orange-500 w-6 h-6"
            />
            <div className="flex flex-col justify-center">
              <span className="text-gray-600 text-sm">Exercise</span>
              <span className="font-bold text-lg text-gray-900">
                {exercise.toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
