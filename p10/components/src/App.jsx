import './App.css'
import Components from './Components'
import Functions from './Functions'
import Myclass from './Myclass'
import Props from './Props'
import Props2 from './Props2'
import State from './State'

function App() {

  return (
    <>
      <Components/>
      <h1>vs</h1>
      <Functions/>
      <h1>difference</h1>

      <h1>class</h1>
      <Myclass/>

      <h1>Components Props</h1>
      <Props name="Gautam" age="18"/>

      <h1>Components Props2</h1>
      <Props2 name="Gautam" age="18"/>

      <h2>Components State</h2>
      <div style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexWrap : 'wrap',
        gap : "1rem 1rem"
      }}>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
        <State/>
      </div>
    </>
  )
}

export default App
