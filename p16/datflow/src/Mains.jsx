import React from 'react'
import Hero from './Hero'
import About from './About'

const Mains = (Props) => {
  return (
    <div className='bg-gray-400 p-8'>
      <h1>main</h1>
      <h1>{Props.name}</h1>
      <Hero/>
      <About/>
    </div>
  )
}

export default Mains
