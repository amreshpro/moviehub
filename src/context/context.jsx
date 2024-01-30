/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const ThemeContext = createContext("light");

export const useThemeContext = () => useContext(ThemeContext);
