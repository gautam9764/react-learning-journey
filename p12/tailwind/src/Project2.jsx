import { useState } from "react"

function Project2(){

    const [Count , setCount] = useState(0);

    function increment(){
        setCount(Count + 1)
    }
    function decrement(){
        setCount(Count - 1)
    }
    function relod(){
        setCount(0)
    }
    return(
        <>
            <div className="bg-green-400 flex flex-col justify-center items-center">
                <h2>{Count}</h2>
                <div className="3">
                    <button onClick={increment} >➕</button>
                    <button onClick={decrement} >➖</button>
                    <button onClick={relod} >🔄️</button>
                </div>
            </div>
        </>
    )
}

export default Project2