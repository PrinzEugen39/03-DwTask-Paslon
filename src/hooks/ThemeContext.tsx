import { useContext, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const ThemeContext = createContext({ theme: "", toggleTheme: () => {} });

function ThemeProvider({ children }: { theme: string, children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "cupcake" : "dark");
  };

  return <ThemeContext.Provider 
    value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>;
}

function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined)
    throw new Error("Theme context was used outside of the ThemeProvider");
  return context;
}

// eslint-disable-next-line 
export {ThemeProvider, useTheme}