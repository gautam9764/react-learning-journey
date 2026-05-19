function PropsChildren({children}){
    return(
        <>
            <div className='w-40 h-30 bg-blue-600'>
                <h1 className='text-white'>{children}</h1>
            </div>
        </>
    )
}

export default PropsChildren