// context API when their is nested and no of components are large prop fails. context API is a solution teleport kr deta hai
// API connect two interfaces.
// example of rooms inside inside rooms

import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user')) //JSON.parse convert json into jsx 
    )
    const [loggedIn, setLoggedIn] = useState(false);

    const logout = () =>{
        setLoggedIn(false);
        sessionStorage.removeItem('user');
        navigate('/login');
    }
    return <AppContext.Provider value={{setLoggedIn, loggedIn, logout}}>
        {children}
    </AppContext.Provider>
} 

const useAppContext = () => useContext(AppContext); 

export default useAppContext;