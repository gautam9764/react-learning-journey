import React from "react"

function Practice(){
    return (
        <>
            {React.createElement(
                "h1" ,
                null ,
                "hello from React"
            )}


            {React.createElement(
                "h2" , 
                {style : {color : "red"}} , 
                "ok react ind color red"
            )}

            {
                React.createElement(
                    "div",
                    {style: {backgroundColorlor:"blue"}},
                    React.createElement(
                        "h1",
                        {style: {color:"blue"}},
                        "Nested Elements"
                    )
                )
            }
        </>
    )
}

export default Practice