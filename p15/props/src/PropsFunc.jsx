function PropsFunc ({on , name}){
    return(
        <>
            <button onClick={on} className="pt-1 pr-2 pb-1 pl-2  bg-blue-700 text-white rounded-4xl">{name}</button>
        </>
    )
}
export default PropsFunc