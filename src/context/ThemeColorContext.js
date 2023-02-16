import { useState, createContext } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {},
  toggleMode: () => {},
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(getInitialTheme());

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("USER_THEME", "light");
    }
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("USER_THEME", "dark");
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const savedTheme = localStorage.getItem("USER_THEME");
    if (savedTheme) {
      return savedTheme;
    }
  }
  return "light";
};
