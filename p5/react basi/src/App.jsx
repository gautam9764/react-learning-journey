import { Component, useState } from 'react'
import './App.css'
import Jsx from './Jsx'
import Components from './Components'
import Props from './Props'
import State from './State'

function App() {

  return (
    <>
      <h1>hello form React js</h1>
      <h1>this is jsx</h1>
      <Jsx />
      <h1>this is Components</h1>
      <Components />
      <h1>this is a Props</h1>
      <Props />
      <Props title="gautam is bro"/>
      <Props number={18}/>
      <h1>State</h1>
      <State/>
    </>
  )
}

export default App
