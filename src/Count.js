import { useState } from "react";
import "./App.css";

function CounterApp() {
  let [valueOfCount, setValueOfCount] = useState(0);

  function handleIncrement(e, data) {
    valueOfCount += data;
    setValueOfCount(valueOfCount);
  }

  function handleDecrement(e, data) {
    valueOfCount -= data;
    setValueOfCount(valueOfCount);
  }
// let add = (a, b) => {
  //   return a+b;
  // };

  // let subtract = (a, b) => {
  //   return a-b
  // }

  // let multiply = (a, b) => {
  //   return a*b
  // }

  // let divide = (a, b) => {
  //   return a/b
  // }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {valueOfCount}</p>

      <button onClick={(e) => handleIncrement(e, 1)}>Increment</button>
      <button onClick={(e) => handleDecrement(e, 1)}>Decrement</button>
    </div>
  );
}

export default CounterApp;
