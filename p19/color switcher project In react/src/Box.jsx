import React from 'react'

const Box = ({color}) => {
  return (
    <div style={{
      backgroundColor : color,

    color : color === "Yellow" ? "black" : "white"
    
    }} className='w-55 h-50 rounded-2xl font-extrabold text-center content-center border-2 text-3xl'>
      {color}
    </div>
  )
}

export default Box
