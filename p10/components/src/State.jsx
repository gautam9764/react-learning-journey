import { useState } from "react"

function State(){

    const [Count , setCount] = useState(0);

    return(
        <>
            <div style={{
              backgroundColor : "red"  
            }}>
                <h2>{Count}</h2>
                <button onClick={()=>{setCount(Count + 1)} }>incremet</button>
            </div>
        </>
    )
}

export default State