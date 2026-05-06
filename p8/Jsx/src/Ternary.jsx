function Ternary (){

    let age = 18;

    return (
        <>
        age = {age} {age >= 18 ? <p>yes</p> : <p>not</p> } 
        </>
    )
}

export default Ternary