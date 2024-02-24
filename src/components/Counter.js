import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="counter">
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <h3 data-testid="counter">{counter}</h3>
      <button data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </div>
  );
}

export default Counter;
