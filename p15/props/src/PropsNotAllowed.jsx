function PropsNotAllowed(Props){
// Props.username = Props  //not allowed
    return(
        <>
            <div className='w-40 h-30 bg-blue-600'>
                <h1 className='text-white'>name : {Props.name}</h1>
                <h2 className='text-white'>age : {Props.age}</h2>
            </div>
        </>
    )
}

export default PropsNotAllowed