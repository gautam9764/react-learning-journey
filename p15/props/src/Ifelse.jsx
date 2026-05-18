function Ifelse ({name , age , isstudent}){
    return(
        <>
            <div className='w-60 h-30 bg-blue-600'>
                <h1  className='text-white'>{name} is {age} years old . {isstudent ? "Yes" : "No"}</h1>
            </div>
        </>
    )
}

export default Ifelse