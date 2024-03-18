import CompLifeCycle from "./Comp-lifecycle";
import React, { useState } from "react";

function ClassProp() {
    // Define a state variable 'name' with initial value "anji bartwal"
    const [name, setName] = useState("anji bartwal");

    return (
        <div>
            {/* Render 'CompLifeCycle' component and pass 'name' as a prop */}
            props by class
            <CompLifeCycle name={name} />

            {/* Button that updates the 'name' state to "ap" when clicked */}
            <button onClick={() => { setName("ap") }}>update</button>

            
        </div>
    );
}

// Export the 'ClassProp' component as the default export
export default ClassProp;