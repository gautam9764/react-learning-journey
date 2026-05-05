function  Jsx(){
 
    let name = "Gautam"; 
 
    function FuncReturn (){
        return "function is a return";
    } 

    let age = 18;
 
    return(
        <> 
            <h2>Variables {name}</h2>
            <h2>Function calls {FuncReturn()}</h2>
            <h2>Ternary expressions {age >= 18 ? "yes" : "not" }</h2>
        </> 
    ) 
} 

export default Jsx