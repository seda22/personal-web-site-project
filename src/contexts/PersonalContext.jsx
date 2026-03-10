import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialState from "../../data";


export const PersonalContext = createContext();

const PersonalContextProvider = ({children}) => {
    const [langu, setLangu] = useLocalStorage("language", "en");

    const toggleLangu = () => {
        setLangu(langu === "en" ? "tr": "en") 
    } 


    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark": "light") 
    } 


    const [profileData, setProfileData] = useState(initialState);


const values ={langu, toggleLangu, theme, toggleTheme, profileData};

    return(
        <PersonalContext.Provider value={values}>
            {children}
        </PersonalContext.Provider>
    )
}

export default PersonalContextProvider;

