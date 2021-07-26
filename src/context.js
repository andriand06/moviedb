import React, { useState, createContext } from 'react'
//global context and a state that our application can access globally 
export const Context = createContext();

//Provider -> Wrap our application, wrap in app Component later

const UserProvider = ({ children }) => {
    const [ state, setState ] = useState(undefined);

    return (
        <Context.Provider value={[ state, setState]}> {children} </Context.Provider>
    )
}

export default UserProvider;
