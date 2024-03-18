function Comp(){
function CompInComp(){

    return(<div>componenet Inside CompInComp</div>
    )
}
return(<>

<h1>comp</h1>
<CompInComp/>

</>)
}

export default Comp


