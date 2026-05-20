import React from 'react'

const Hero = (Props) => {
  return (
    <div  className='bg-red-600'>
      <h1>Hero</h1>
      <h1>{Props.name}</h1>
    </div>
  )
}

export default Hero
