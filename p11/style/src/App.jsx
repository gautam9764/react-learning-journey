import './App.css'
import Card2 from './Card2'
import Inline from './Inline'
import Modul from './Modul'

function App() {
  

  return (
    <> 
      <h1 className='red'>Regular CSS File</h1>
      <Card2/>

      <h1>CSS Modules</h1>
      <Modul/>

      <h1>CSS Inline</h1>
      <Inline/>
    </>
  )
}

export default App

