import { IExercise } from "@/types/index";

export const getExercises = async (
  keywords: string,
  limit: number = 20
): Promise<IExercise[] | null> => {
  if (!keywords) {
    console.error("Keywords are required");
    return null;
  }

  try {
    const response = await fetch(
      `https://exercisedb-api1.p.rapidapi.com/api/v1/exercises?keywords=${encodeURIComponent(
        keywords
      )}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
          "X-RapidAPI-Host": "exercisedb-api1.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      console.error(
        "API request failed:",
        response.status,
        response.statusText
      );
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
