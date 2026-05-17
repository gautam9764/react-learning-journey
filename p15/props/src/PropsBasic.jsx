import React from 'react'

function PropsBasic(Props) {
  return (
    <>
      <div className='w-40 h-30 bg-blue-600'>
        <h1 className='text-white'>name : {Props.name}</h1>
        <h2 className='text-white'>age : {Props.age}</h2>
      </div>
    </>
  )
}

export default PropsBasic
