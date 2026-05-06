function ShortCircuit (){
    return (
        <>
            <p>{true && "yes"}</p>
            <p>{false && "not"}</p>
        </>
    )
}

export default ShortCircuit