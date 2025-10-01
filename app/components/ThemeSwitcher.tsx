import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => {
        setDarkMode((prev: any) => {
          localStorage.setItem("theme", prev ? "light" : "dark");
          return !prev;
        });
      }}
      className="fixed top-4 right-4 w-10 h-10 rotate-45 backdrop-blur-sm transition rounded-full border-b-2 duration-500 border-primary-500 dark:border-yellow-500"
    >
      <div className="-rotate-45">
        <Sun
          data-state={darkMode ? "open" : "close"}
          className="text-yellow-500 animate-open_close"
        />
        <Moon
          data-state={darkMode ? "close" : "open"}
          className="text-primary-500 animate-open_close"
        />
      </div>
    </button>
  );
}
