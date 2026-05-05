import { useState } from "react"

function Jsx (Props){

    const [count , setCount] = useState(0);

    function increment (){
        setCount(count + 1);
    }

    return (
        <>
            <h1> {Props.name}</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Jsx