import React, { useCallback, useMemo, useState } from 'react'

function UseMemoExample1() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(10);
    const [count,setCount]=useState(0)

  const sum= useMemo(()=>{
    return number1+number2
  },[number1,number2])


    const handleClick= useCallback(()=>{
    setCount((prev)=>prev+1)
    },[count])




    return (
        <div >
            <h1>{count}</h1>
            <h1>Number1: {number1}</h1>
            <h1>Number2: {number2}</h1>

            <h1>sum: {sum}</h1>
            <button onClick={() => setNumber1((prev) => prev + 1)}>Click Increment number1 </button>
            <button onClick={() => setNumber2((prev) => prev - 1)}>Click Decrement number2 </button>
            <button onClick={handleClick}>Count</button>

        </div>
    )
}

export default UseMemoExample1





// --------------------------------------------------------------------------------


// import React, { useCallback, useState } from 'react'

// function Example1UseCallback() {
//     const [count, setCount] = useState(10);

//     const handleClick = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, [count]);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>Click Me for Count Increment</button>
//         </div>
//     )
// }
// export default Example1UseCallback

