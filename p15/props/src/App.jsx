import './App.css'
import PropsBasic from './PropsBasic'
import PropsDestructuring from './PropsDestructuring'
import PropsNotAllowed from './PropsNotAllowed'

function App() {

  return(
    <>
      <h1>Props Basic</h1>
      <PropsBasic name={"Gautam"} age={18}/>

      <h1>Props Destructuring</h1>
      <PropsDestructuring name={"Gatuam"} age={18}/>

      <h1>Props Not Allowed Props Are Immutable</h1>
      <PropsNotAllowed name={"Gautam"} age={18}/>
    </>
  )
  
}

export default App
