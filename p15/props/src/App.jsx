import './App.css'
import Ifelse from './Ifelse'
import PropsArr from './PropsArr'
import PropsBasic from './PropsBasic'
import PropsDestructuring from './PropsDestructuring'
import PropsNotAllowed from './PropsNotAllowed'
import PropsObj from './PropsObj'

function App() {

  const Obj = {
    "name" : "Gautam",
    "age" : 18
  }

  return(
    <>
      <h1>Props Basic</h1>
      <PropsBasic name={"Gautam"} age={18}/>

      <h1>Props Destructuring</h1>
      <PropsDestructuring name={"Gatuam"} age={18}/>

      <h1>Props Not Allowed Props Are Immutable</h1>
      <PropsNotAllowed name={"Gautam"} age={18}/>

      <h1>Basic Props (Strings, Numbers, Booleans)</h1>
      <Ifelse name={"Gautam"} age={18} isstudent={true}/>

      <h1>Props as Object</h1>
      <PropsObj name={Obj}/>

      <h1>Props as array</h1>
      <PropsArr name={["gautam" , "18"]} />
    </>
  )
  
}

export default App
