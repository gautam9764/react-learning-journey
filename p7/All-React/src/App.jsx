import './App.css'
// import header1 from './header1'  not a wokeng header 
import Header1 from './header1'  // yes wokaeng Header 
import Header2 from './Header2'
import ExportDefault1 from './ExportsDefault1'

function App() {

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
    </>
  )
}

export default App
