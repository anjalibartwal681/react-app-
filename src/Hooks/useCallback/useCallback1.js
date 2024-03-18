import react,{ useCallback,useState } from 'react' ;
 function  Example1UseCallback1(){
const [count, setCount]=useState(0)

const  handleUseclbk =useCallback(()=>{
    setCount((prev)=>prev+1) 
},[])



return(
    <div>
        <h1>{count}</h1>
        <button onClick={handleUseclbk}>onClick</button>
    </div>
)

}


 export default Example1UseCallback1