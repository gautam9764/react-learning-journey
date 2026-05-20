import React from 'react'

const About = (Props) => {
  return (
    <div className='bg-blue-600'>
      <h1 >About</h1>
      <h1>{Props.name}</h1>
    </div>
  )
}

export default About
