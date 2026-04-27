function Parent (){

    const message = "parent , Clild and DataFlow"

    return(
        <>
            <h2>parent</h2>
            <Clicld name={message}/>
        </>
    )
}

function Clicld(props){
    return(
        <>
            <h2>Clild</h2>
            <h2>{props.name}</h2>
        </>
    )
}

function DataFlow(){
    return(
        <>
            <h2>DataFlow</h2>
            <Parent/>
        </>
    )
}

export default DataFlow