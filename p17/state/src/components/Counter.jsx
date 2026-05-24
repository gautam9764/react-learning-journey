import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="state-container">
      <h2>Counter Example</h2>
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="button-group">
        <button onClick={decrease} className="btn btn-danger">Decrease</button>
        <button onClick={reset} className="btn btn-secondary">Reset</button>
        <button onClick={increase} className="btn btn-success">Increase</button>
      </div>
    </div>
  );
}

export default Counter;
