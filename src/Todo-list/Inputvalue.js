import React, { useState } from "react";

function InputValue() {
    const [inputvalue, setInputvalue] = useState({});
    const [temp, setTemp] = useState("");
    const [localvalue, setLocalValue] = useState([]);

    const getValue = (e) => {
        setTemp(e.target.value);
    };

    const setValue = () => {
        setInputvalue({ ...inputvalue, 'name': temp });
        console.log("inputvalue",inputvalue, temp)
        setLocalValue([...localvalue, temp]);
        console.log("im localvalue",localvalue)
        setTemp("");
    };

    
        // const elements = [];
        for (const value of localvalue) {
            console.log(value)
            // elements.push(<div key={value}>{value}</div>);
        }
        


    return (
        <div>
            {localvalue}
            <input
                type="text"
                value={temp}
                onChange={getValue}
            />
            <button type="submit" onClick={setValue}>Add</button>
        </div>
    );
}

export default InputValue;
