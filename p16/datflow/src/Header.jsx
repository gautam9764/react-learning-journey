import React from 'react'

const Header = (Props) => {
  return (
    <div  className='bg-red-700'>
      <h1>Header</h1>
      <h1> {Props.name}</h1>
    </div>
  )
}

export default Header
