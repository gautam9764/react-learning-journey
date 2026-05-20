import React from 'react'

const Footer = (Props) => {
  return (
    <div className='bg-green-800'>
      <h1>Footer</h1>
      <h1>{Props.name}</h1>
    </div>
  )
}

export default Footer
