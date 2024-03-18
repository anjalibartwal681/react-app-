import User from "./function-User";

function  FunProp(){
const getData=()=>{
    alert("sending functioon as a props");
}
    return(
        <div>
<User data={getData}/>
        </div>
    )
}
export default FunProp;