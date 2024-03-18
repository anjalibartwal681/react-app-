import { useState } from "react";
function COnditional(){
const[loggedIn,setLoggedin]=useState(3)

return(
    <div>
        {loggedIn==1?
        <h1>welcome user1</h1>
        :loggedIn==2?<h1>user2</h1>
        :<h1>user3</h1>
        }
    </div>
)


}
export default COnditional