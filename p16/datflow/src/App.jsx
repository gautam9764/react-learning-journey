import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Mains from './Mains'

function App() {

  const [data , setData] = useState("Gautam");

  function sum (value){
    setData(value);
  }

 return(
  <>
    <Header name={data}/>
    <Mains name={data} func={sum}/>
    <Footer name={data}/>
  </>
 )
}

export default App
