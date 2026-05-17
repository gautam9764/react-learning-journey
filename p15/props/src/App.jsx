import './App.css'
import PropsBasic from './PropsBasic'
import PropsDestructuring from './PropsDestructuring'

function App() {

  return(
    <>
      <h1>Props Basic</h1>
      <PropsBasic name={"Gautam"} age={18}/>

      <h1>Props Destructuring</h1>
      <PropsDestructuring name={"Gatuam"} age={18}/>
    </>
  )
  
}

export default App
