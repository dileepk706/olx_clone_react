import { createContext, useState } from "react";

export const firebaseContext=createContext(null )

export const AuthContext=createContext(null)

export const Context=({children})=>{

    let [user,setUser]=useState('')
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}