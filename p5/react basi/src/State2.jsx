import { useState } from "react"

function State2(){

    const [count , setState] = useState(0);

    function FuncState2(){
        setState(count + 1);
    }
    return(
        <>
        <h2>State 2</h2>
        <h2>{count}</h2>
        <button onClick={FuncState2}>increment</button>
        </>
    )
}

export default State2