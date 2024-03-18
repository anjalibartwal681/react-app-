import React, { useContext, createContext, useState } from "react";
import UseComp2 from "./Context1";
import UseComp3 from "./context2";

export const UserContext = createContext();
export default function Comp1() {
    const [user, setUser] = useState("");
    return (
        <div>
            <UserContext.Provider value={user}>
                <input value={user} onChange={(e)=>setUser(e.target.value)}/>
                <h1>UserContext Component</h1>
                <UseComp2 />
                <UseComp3/>  
            </UserContext.Provider> 

           
        </div>
    );
}


