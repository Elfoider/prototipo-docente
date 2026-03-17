"use client";

import { useThemeMode } from "@/hooks/useThemeMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "light" ? "Modo oscuro" : "Modo claro"}
    </button>
  );
}