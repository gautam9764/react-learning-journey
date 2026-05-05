import './App.css'
// import header1 from './header1'  not a wokeng header 
import Header1 from './header1'  // yes wokaeng Header 
import Header2 from './Header2'
import ExportDefault1 from './ExportsDefault1'
import ExportDefault2 from './ExportDefault2'
import ExportName1 , {Card} from './ExportName1'
import ExportName2 , {Card2} from './ExportName2'
import Css from './Css'
import Img1 from './Img1'
import Img2 from './Img2'
import { Utilities } from './Utilities'
import Data from "./json.json"
// import axios from 'axios'
// import {BrowserRouter } from './react-router-dom'

function App() {

  let Sum = Utilities(12,13);

  console.log(Sum);

  console.log(Data);

  return (
    <>
      <h1>inport and export</h1>
      <h1>default and Name export</h1>
      
      <h1>header</h1>
      {/* <header1/>    */}
      <Header1/>

      <h1>Header</h1>
      <Header2/>

      <h1>Export Default</h1>
      <ExportDefault1/>

      <h1>Export Default</h1>
      <ExportDefault2/>

      <h1>Export Name 1 Card</h1>
      <ExportName1/>
      <Card/>

      <h1>Export Name 2 Card</h1>
      <ExportName2/>
      <Card2/>

      <h1>style.css fil add</h1>
      <Css/>

      <h1>img fil add 1</h1>
      <Img1/>

      <h1>img fil add 2</h1>
      <Img2/>

      <h1> Modules / Functions / Utilities:</h1>
      <h1>{Sum}</h1>

      <h1>json </h1>
    </>
  )
}

export default App
