"use client";

import { DayPicker, type DayPickerProps } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function Calendar(props: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays
      {...props}
      className={[
        "w-full p-2",
        "[&_.rdp-nav]:flex [&_.rdp-nav]:items-center [&_.rdp-nav]:justify-between",
        "[&_.rdp-head_cell]:text-gray-500 [&_.rdp-head_cell]:font-medium",
        "[&_.rdp-button]:rounded-md [&_.rdp-button]:text-sm",
        "[&_.rdp-day_today]:bg-blue-50",
        "[&_.rdp-day_selected]:bg-blue-600 [&_.rdp-day_selected]:text-white",
        props.className || "",
      ].join(" ")}
      modifiersStyles={{
        selected: { backgroundColor: "#2563eb", color: "#fff" },
        today: { backgroundColor: "#eff6ff" },
        ...(props.modifiersStyles || {}),
      }}
    />
  );
}
