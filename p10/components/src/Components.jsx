
function Square(){
    return(
        <>
            <div className="square"></div>
        </>
    )
}
// not work

// function square(){
//     return(
//         <>
//             <div className="square"></div>
//         </>
//     )
// }

function Square2(props){
    console.log(props);
    return(
        <>
            <div className="square">
                <h2>Components</h2>
                <h2>name : {props.name}</h2>
                <h2>age : {props.age}</h2>
            </div>
        </>
    )
}


function Components(){
    return(
        <>
            <h2>Helo React Pe React</h2>
            <Square/>
            <Square></Square>
            {/* <square></square>   not a work */}

            <h2>Components</h2>
            <h2>Components Props</h2>
            <Square2/>
        </>
    )
}

export default Components