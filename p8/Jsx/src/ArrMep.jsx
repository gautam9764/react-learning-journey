function ArrMep (){

    let arr = [" Apple " , " Banana ", " Mango "];

    return (
        <>
            <>
                {arr.map(function(item , index){
                    return <p key={item}>{item} of {index}</p>
                })}
            </>
        </>
    )
}

export default ArrMep