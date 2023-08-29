import { createContext, useReducer } from "react";

const ThemeContext = createContext();

let contextReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
};

const ThemeContextProvider = ({ children }) => {

    let [ state, dispath ] = useReducer(contextReducer, {
        theme: "light"
    });

    let changeTheme = () => {
        dispath({
            type: "CHANGE_THEME",
            payload: "dark"
        });

    };

    return (
        <ThemeContext.Provider value={{ ...state, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }