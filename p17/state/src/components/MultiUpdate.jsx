import { useState } from "react";

function MultiUpdate() {
  const [count, setCount] = useState(0);

  const increaseByThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  const increaseByAmount = (amount) => {
    setCount(prev => prev + amount);
  };

  const reset = () => setCount(0);

  return (
    <div className="state-container">
      <h2>Functional Update (Batch Updates)</h2>
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="button-group">
        <button onClick={increaseByThree} className="btn btn-success">+3</button>
        <button onClick={() => increaseByAmount(5)} className="btn btn-success">+5</button>
        <button onClick={() => increaseByAmount(10)} className="btn btn-info">+10</button>
        <button onClick={reset} className="btn btn-secondary">Reset</button>
      </div>
    </div>
  );
}

export default MultiUpdate;
