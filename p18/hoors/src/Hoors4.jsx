import React, { useEffect, useState } from 'react'

const Hoors4 = () => {

    const [count , useCount] = useState(0);
    const [counts , useCounts] = useState(0);

    function increment(){
        useCount(conut + 1);
    }

    function decrement(){
        useCounts(counts - 1);
    }
    useEffect(()=>{
        console.log("useEffect 3");
    },[counts]);

  return (
    <div className='bg-blue-900 w-25 h-25 flex flex-col justify-center items-center gap-3 '>
      <h1 className='text-amber-100'>{counts}</h1>
      <button onClick={decrement} className='pt-1 pl-2 pb-1 pr-2 rounded-2xl bg-red-800 text-amber-400'>increment</button>
    </div>
  )
}

export default Hoors4
