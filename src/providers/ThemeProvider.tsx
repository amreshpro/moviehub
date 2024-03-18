"use client";
import { useState,type ReactNode} from "react";
import { ThemeContext } from "./context";

 const ThemeProvider =({children}:{children:ReactNode})=> {
     const [theme, setTheme] = useState<"light"|"dark">('dark')
 
 return (
<ThemeContext.Provider value={{theme,setTheme}}>
    {children}
</ThemeContext.Provider>  )
}


export default ThemeProvider