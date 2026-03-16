import React, { useState } from 'react'

const State = () => {

  const arr = useState;
  console.log(arr);
  console.log(arr());

    let count = 0;

     function increment (){
      count++;
      console.log(count);
    }
  return (
    <div>
      <h2>count</h2>
      <h2>{count}</h2>      
      <button onClick={increment}>click me!</button>
    </div>
  )
}

export default State
