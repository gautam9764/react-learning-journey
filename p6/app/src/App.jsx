import { useState } from 'react'
import './App.css'
import CountApp from './CountApp';

function App() {

  const [Count , setCount] = useState(0);

  function increment (){
    setCount(Count + 1);
  }

  function decrement (){
    setCount(Count - 1);
  }

  function restart (){
    setCount(0);
  }

  return (
    <>  
      <h1>Count app</h1>
      <p>Count {Count}</p>

      <div className='btn'>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={restart}>restrt</button>
      </div>

      <CountApp/>
    </>
  )
}

export default App
