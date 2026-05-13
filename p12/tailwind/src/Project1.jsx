
function Project1(){
    return(
        <>
            <nav className="bg-blue-600 ">
                <ul className="flex flex-row justify-evenly items-center  ">
                    <Li li="Navbar"/>
                    <Li li="Home"/>
                    <Li li="Features"/>
                    <Li li="Pricing"/>
                    <Li li="About"/>
                </ul>
            </nav>
        </>
    )
}

export default Project1

function Li({li}){
    return(
        <>
            <li className="text-white m-0.5">{li}</li>
        </>
    )
}
