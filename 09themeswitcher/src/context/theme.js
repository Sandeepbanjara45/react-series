import { createContext,useContext } from "react";

export const Themecontext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {},

})
export const ThemeProvider = Themecontext.Provider

// custom context 
export default function useTheme(){
    return useContext(Themecontext);
}