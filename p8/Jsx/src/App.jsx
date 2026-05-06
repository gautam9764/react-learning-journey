import './App.css'
import Inline from './Inline'
import Internal from './Internal'
import Jsx from './Jsx'
import ShortCircuit from './ShortCircuit'
import Ternary from './Ternary'

function App() {

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
    </>
  )
}

export default App
