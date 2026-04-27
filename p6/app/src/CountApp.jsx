import { useState } from "react"

function CountApp (){

    const [Count , setCount] = useState(0);

    function increment (){
        setCount(Count + 1);
    }

    function decrement (){
        setCount(Count - 1);
    }

    function restart (){
        setCount(0);
    }

    return (
        
        <>
            <h1>Count app and Components</h1>
            <p>Count : {Count}</p>

            <div className="btn">
                <Btn func={increment} name="increment" />
                <Btn func={decrement} name="decrement" />
                <Btn func={restart} name="restart" />
            </div>
        </>
    )
}

function Btn ({name , func}){
    return(
        <>
            <button onClick={func}> {name} </button>
        </>
    )
}

export default CountApp