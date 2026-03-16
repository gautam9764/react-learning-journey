

function Props2 ({s1 ,s2 ,s3}){
    return(
        <>
            <h3>{s1}</h3>
            <h3>{s2}</h3>
            <h3>{s3}</h3>
        </>
    )
}

function Props (proms){
    console.log(proms);
    return(
        <>
            <h2>this is Props component</h2>
            <p>this is string = {proms.title}</p>
            <p>123  = {proms.number}</p>
            <Props2 s1 ="hello form Props 1"/>
            <Props2 s1 ="hello form Props 2"/>
            <Props2 s1 ="hello form Props 3"/>
        </>
    )
}


export default Props;

