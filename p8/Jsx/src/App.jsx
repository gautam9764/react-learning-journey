import './App.css'
import Inline from './Inline'
import Internal from './Internal'
import Jsx from './Jsx'
import Ternary from './Ternary'
import ShortCircuit from './ShortCircuit'
import ArrMep from './ArrMep'
import Header from './Header'

function App() {

  let apply = <p>hello how {2+2} are you</p>

  return (
    <>
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat quas expedita dolor at culpa nobis, incidunt ducimus, quisquam iure unde eaque quod eligendi nemo animi voluptates facere vel voluptas!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, velit. Rem, similique. Praesentium, error enim ad voluptates ipsa, quisquam cum maxime nobis laborum dignissimos delectus suscipit magni veniam alias harum?</p>

      <h1>Jsx</h1>
      <Jsx/>

      <h1>Inline Style </h1>
      <Inline/>

      <h1>Internal Style</h1>
      <Internal/>

      <h1>Using Ternary Operator</h1>
      <Ternary/>

      <h1>Short-circuit rendering</h1>
      <ShortCircuit/>

      <h1>JSX with Loops (Arrays)</h1>
      <ArrMep/>

      <h1>Props</h1>
      <h1>{apply}</h1>
      <Header name={apply}/>
    </>
  )
}

export default App
