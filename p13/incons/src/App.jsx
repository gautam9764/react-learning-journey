import './App.css'
import { AiFillAmazonCircle , AiFillWindows } from "react-icons/ai";
// import { AiFillWindows } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

function App() {
  return(
    <>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
      <h1>React Icon</h1>
        <AiFillAmazonCircle />
        <AiFillWindows />
        <BsApple />
      </div>
    </>
  )
}
export default App
