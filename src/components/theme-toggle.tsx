import { useTheme } from "@/context/theme-provider";
import Switch from "./switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "light";

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isDark}
        onCheckedChange={(checked: boolean) => setTheme(checked ? "light" : "dark")}
      />
    </div>
  );
}