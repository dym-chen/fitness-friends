import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { getNutritionEntries } from "@/lib/nutrition_entries";

Chart.register(ArcElement, Tooltip);

interface DailyBoxProps {
  userId: string | undefined;
}

export const DailyBox = ({ userId }: DailyBoxProps) => {
  const [goal, setGoal] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);
  const [food, setFood] = useState<number>(0);
  const [exercise, setExercise] = useState<number>(0);

  useEffect(() => {
    async function fetchEntries() {
      const temp = userId ? await getNutritionEntries(userId) : []; // add created today filter
      console.log("Fetched data:", temp);
      const data = temp?.[0];

      if (!data) {
        console.error("No data found");
        return;
      }
      const { goal, cal_food, cal_exercise } = data;
      setGoal(goal);
      setFood(cal_food);
      setExercise(cal_exercise);
      setRemaining(goal - cal_food + cal_exercise);
    }
    fetchEntries();
  }, [userId]);

  console.log(remaining);

  const data = {
    datasets: [
      {
        data: [100 - (remaining / goal) * 100, (remaining / goal) * 100],
        backgroundColor: ["#4ade80", "#e5e7eb"], // green and light gray
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
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800">Calories</h2>
      <p className="text-m text-gray-600 mb-2">
        Remaining = Goal - Food + Exercise
      </p>
      <div className="flex items-center justify-between mb-4 mt-2">
        <div className="relative w-30 h-30">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center flex-col ">
            <h2 className="text-3xl font-bold">{remaining.toFixed(0)}</h2>
            <p className="text-sm">remaining</p>
          </div>
        </div>
        <div>
          <p className="text-m text-gray-600 mb-2">
            Goal: {goal.toFixed(0)} kcal
          </p>
          <p className="text-m text-gray-600 mb-2">
            Food: {food.toFixed(0)} kcal
          </p>
          <p className="text-m text-gray-600 mb-2">
            Exercise: {exercise.toFixed(0)} kcal
          </p>
        </div>
      </div>
    </div>
  );
};
