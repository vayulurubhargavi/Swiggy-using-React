import { createContext, useState } from "react";


const DarkThemeContext = createContext();

function DarkThemeContextProvider(props) {
    const [theme, setTheme] = useState(true);
    
    const toggleTheme = () => {
        setTheme(!theme)
    }  
    return (
        <>
            <DarkThemeContext.Provider value={{theme,toggleTheme}}>
                    {props.children}
            </DarkThemeContext.Provider>
        
        </>
    )
}
export  {DarkThemeContext,DarkThemeContextProvider};