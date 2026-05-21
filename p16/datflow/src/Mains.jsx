import React from 'react'
import Hero from './Hero'
import About from './About'

const Mains = (Props) => {

  // Props.func("hello ");

  function sum2(){
    Props.func("ok dan"); 
  }

  return (
    <div className='bg-gray-400 p-8'>
      <h1>main</h1>
      <h1>{Props.name}</h1>
      <button onClick={sum2} className='pt-1 pr-2 pb-1 pl-2 bg-green-800 text-amber-500 rounded-4xl'>click me !</button>
      <Hero  name={Props.name}/>
      <About name={Props.name}/>
    </div>
  )
}

export default Mains
