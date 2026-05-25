import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Btn from "./Btn";

function App() {
  let color = ["Red", "Green", "Blue", "Yellow", "Purple"];

  console.log(color);

  const [colorcolor, setColor] = useState("transparent");

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1>🎨 color switcher</h1>

      <div className="flex gap-4">
        {color.map((index) => {
          return (
            <Btn key={index} color={index} fun={setColor}>
              {index}
            </Btn>
          );
        })}
      </div>
      <Box color={colorcolor} />
    </div>
  );
}

export default App;
