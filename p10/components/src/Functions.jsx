function square1(){
    return(
        <>
            <div className="square"></div>
        </>
    )
}

function Square2(){
    return(
        <>
            <div className="square"></div>
        </>
    )
}
function Square3(para1 , para2){
    return(
        <>
            <div className="square">
                <h2>function </h2>
                <h2>name : {para1}</h2>
                <h2>age : {para2}</h2>
            </div>
        </>
    )
}
function Functions(){
    return(
        <>
            <h2>Function</h2>

            {
                square1()
            }
            {
                Square2()
            }
            {
                Square3("Gatuam" , 18)
            }
        </>
    )
}
export default Functions