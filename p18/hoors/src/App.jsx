import './App.css'
import Hoors1 from './Hoors1'
import Hoors2 from './Hoors2'
import Hoors3 from './Hoors3'
import Hoors4 from './Hoors4'

function App() {

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <h1 className='bg-red-400 tex'>Hoors 1 State</h1>
        <Hoors1/>        

        <h1 className='bg-red-400 tex'>Hoors 1 useEffect</h1>
        <Hoors2/>      

        <h1 className='bg-red-400 tex'>Hoors 1 useEffect []</h1>
        <Hoors3/>

        <h1 className='bg-red-400 tex'>Hoors 1 useEffect [counts]</h1>
        <Hoors4/>

      </div>
    </>
  )
}

export default App
