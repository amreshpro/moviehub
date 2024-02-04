import { createContext, useContext } from "react";


export interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {}
});

export const useThemeContext = ()=> {
  return useContext(ThemeContext);
};