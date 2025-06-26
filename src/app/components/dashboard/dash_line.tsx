"use client";

import { INutritionEntry } from "@/app/api/nutrition_entries";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

// Register required Chart.js components
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

interface DashboardLineChartProps {
  userId: string | undefined;
  entries: INutritionEntry[] | [];
}

const metrics = [
  { key: "calories", label: "Calories", color: "#4ade80" },
  { key: "protein", label: "Protein", color: "#60a5fa" },
  { key: "fat", label: "Fat", color: "#fbbf24" },
  { key: "carbs", label: "Carbs", color: "#a78bfa" },
] as const;

type MetricKey = (typeof metrics)[number]["key"];

export const DashboardLineChart = ({
  userId,
  entries,
}: DashboardLineChartProps) => {
  const [enabled, setEnabled] = useState<Record<MetricKey, boolean>>({
    calories: true,
    protein: false,
    fat: false,
    carbs: false,
  });

  console.log(userId);

  // Prepare last 7 days labels and data
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d.toISOString().slice(0, 10); // 'YYYY-MM-DD'
  });

  // Map entries by date for quick lookup
  const dataByDate: Record<string, INutritionEntry> = {};
  entries.forEach((e) => {
    const date = e.created_at?.slice(0, 10);
    if (date) dataByDate[date] = e;
  });

  // Build chart data for each metric
  const chartData = last7Days.map((date) => ({
    date,
    calories: dataByDate[date]?.cal_food || 0,
    protein: dataByDate[date]?.protein || 0,
    fat: dataByDate[date]?.fat || 0,
    carbs: dataByDate[date]?.carbs || 0,
  }));

  const displayLabels = last7Days.map((date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const datasets = metrics
    .filter((m) => enabled[m.key as MetricKey])
    .map((m) => ({
      label: m.label,
      data: chartData.map((d) => d[m.key as MetricKey]),
      borderColor: m.color,
      backgroundColor: m.color + "33",
      fill: false,
      tension: 0.3,
    }));

  return (
    <div className="bg-white shadow-md rounded-lg p-4 col-span-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Weekly Graph</h2>
      <div className="flex gap-2 mb-4">
        {metrics.map((m) => (
          <button
            key={m.key}
            className={`px-2 py-1 rounded text-sm font-medium border transition-colors duration-150 ${
              enabled[m.key as MetricKey]
                ? `bg-[${m.color}] text-white border-transparent`
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
            style={
              enabled[m.key as MetricKey]
                ? { backgroundColor: m.color, color: "#fff" }
                : {}
            }
            onClick={() =>
              setEnabled((e) => ({
                ...e,
                [m.key as MetricKey]: !e[m.key as MetricKey],
              }))
            }
          >
            {m.label}
          </button>
        ))}
      </div>
      <Line
        data={{
          labels: displayLabels,
          datasets,
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: true },
          },
          scales: {
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};
