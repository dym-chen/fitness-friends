"use client";

import { IExercise } from "@/types/nutrition";
import { useState, useEffect } from "react";

export default function ExcercisePage() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  console.log(exercises);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("/api/exercise?keywords=bench");

        if (!response.ok) {
          console.error("API error:", response.status, response.statusText);
          return;
        }

        const complete = await response.json();
        setExercises(complete.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchExercises();
  }, []);

  return <div className="container mx-auto px-4 py-8">hello</div>;
}
