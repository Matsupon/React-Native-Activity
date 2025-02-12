import { useState } from "react";
import "./App.css"; 

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const Calculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "x":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }

    setNum1("");
    setNum2("");
  };

  return (
    <div class="container"> 
    
      <div class="section">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button class="decrease-btn" onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrease</button>
        <button class="increase-btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button class="reset-btn" onClick={() => setCount(0)}>Reset</button>
      </div>
 
      <div class="section">
        <h1>Calculator</h1>
        <input
          class="input-field"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          class="input-field"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div class="operators">
          <button onClick={() => Calculate("+")}> + </button>
          <button onClick={() => Calculate("-")}> - </button>
          <button onClick={() => Calculate("x")}> × </button>
          <button onClick={() => Calculate("/")}> ÷ </button>
        </div>
        <h2>Result: {result !== null ? result : "?"}</h2>
      </div>
    </div>
  );
}

export default App;
