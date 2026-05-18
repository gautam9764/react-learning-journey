function PropsArr({name}){
    return(
        <>
            <div className='w-40 h-30 bg-blue-600'>
                {
                    name.map((items , index)=>{
                        return <h1 key={index} className='text-white'>{items}</h1>
                    })
                }
            </div>
        </>
    )   
}

export default PropsArr