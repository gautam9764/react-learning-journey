function PropsObj({name}){
    return(
        <>
            <div className='w-40 h-30 bg-blue-600'>
                <h1 className='text-white'>name : {name.name}</h1>
                <h2 className='text-white'>age : {name.age}</h2>
            </div>
        </>
    )
}

export default PropsObj