
function Header({text}){
    return(
        <>
            <h1 className="text-5xl font-bold text-[#4171F7] ">{text}</h1>
        </>
    )
}

function Left (){
    return(
        <>
            <div className="w-full h-screen bg-[#F4F4F4]  flex justify-center items-center gap-7">
                <div className="w-3.5 h-[60%] bg-[#4171F7] rounded-xl "></div>   
                <div className="h-[60%] flex flex-col justify-evenly items-start ">
                    <Header text='Profile'/>
                    <Header text='Card'/>
                    <Header text='UI Design'/>
                </div>
            </div> 
        </>
    )
} 

export default Left