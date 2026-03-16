import { useState } from 'react'
import './App.css'
import Jsx from './Jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello form React js</h1>
      <h1>this is jsx</h1>
      <Jsx />
    </>
  )
}

export default App
