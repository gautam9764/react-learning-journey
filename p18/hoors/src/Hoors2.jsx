import React, { useEffect, useState } from 'react'

const Hoors2 = () => {

  const [count , setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect");
  })
  
  return (
    <div className='bg-blue-900 w-25 h-25 flex flex-col justify-center items-center gap-3 '>
      <h1 className='text-amber-100'>{count}</h1>
      <button onClick={increment} className='pt-1 pl-2 pb-1 pr-2 rounded-2xl bg-red-800 text-amber-400'>increment</button>
    </div>
  )
}

export default Hoors2
