import './App.css'
import Ifelse from './Ifelse'
import PropsArr from './PropsArr'
import PropsBasic from './PropsBasic'
import PropsDestructuring from './PropsDestructuring'
import PropsFunc from './PropsFunc'
import PropsJsx from './PropsJsx'
import PropsNotAllowed from './PropsNotAllowed'
import PropsObj from './PropsObj'

function App() {

  const Obj = {
    "name" : "Gautam",
    "age" : 18
  }

  function Btn(){
    alert("Button Clicked!");
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

      <h1>Props as Functions (Callback Functions)</h1>
      <PropsFunc on={Btn} name={"click me !"}/>

      <h1>Props as JSX Elements</h1>
      <PropsJsx content={
        <>
          <h1> hello </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illum.</p>
        </>
      }
      /> 
    </>
  )
  
}

export default App
