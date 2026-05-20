import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Mains from './Mains'

function App() {

  const [data , useData] = useState("Gautam");

 return(
  <>
    <Header name={data}/>
    <Mains name={data}/>
    <Footer name={data}/>
  </>
 )
}

export default App
