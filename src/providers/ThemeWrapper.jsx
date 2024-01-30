import { useThemeContext } from "../context/context";

// eslint-disable-next-line react/prop-types
export default function ThemeWrapper({ children }) {
    const { theme } = useThemeContext();
    console.log(theme);
    return (
        <div
            className={`${
                theme == "dark" ? "dark-body" : "bg-blue-100 text-blue-900"
            }`}
        >
            {children}
        </div>
    );
}
