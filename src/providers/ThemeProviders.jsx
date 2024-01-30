import { useState } from "react";
import { ThemeContext } from "../context/context";

// eslint-disable-next-line react/prop-types
export default function ThemeProviders({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
