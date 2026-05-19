function PropsDefault({name='not a name' , age='not a age'}){
    return(
        <>
            <div className='w-40 h-30 bg-blue-600'>
                <h1 className='text-white'>{name}</h1>
                <h1 className='text-white'>{age}</h1>
            </div>
        </>
    )
}


export default PropsDefault