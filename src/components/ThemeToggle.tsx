import { useEffect } from "react"
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hooks/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
    </>
  );
}
