
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

function Components(){
    return(
        <>
            <h2>Helo React Pe React</h2>
            <Square/>
            <Square></Square>
            {/* <square></square>   not a work */}
        </>
    )
}

export default Components