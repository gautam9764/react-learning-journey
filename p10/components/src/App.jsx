import './App.css'
import Components from './Components'
import Functions from './Functions'
import Myclass from './Myclass'
import Props from './Props'

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
    </>
  )
}

export default App
