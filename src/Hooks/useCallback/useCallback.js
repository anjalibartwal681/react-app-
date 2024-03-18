import React, { useCallback, useState } from 'react'

function Example1UseCallback() {
    const [count, setCount] = useState(10);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click Me for Count Increment</button>
        </div>
    )
}
export default Example1UseCallback