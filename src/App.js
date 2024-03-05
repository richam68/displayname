import { useRef, useState } from "react";
import "./App.css";

function App() {
  let [buttonText, setButtonText] = useState("");
  let inputRef = useRef(null);

  const handleButton = (value) => {
    setButtonText((prev) => prev + value);
  };

  function handleEqualButton() {
    if (buttonText.length) {
      const result = eval(buttonText);
      inputRef.current.textContent = result;
    } else {
      inputRef.current.textContent = "Error";
    }
  }

  function handleClearButton() {
    setButtonText("");
    inputRef.current.textContent = "";
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <input
        id="input-box"
        type="text"
        name="input-box"
        value={buttonText}
        readOnly
      />

      {/* //it will show output */}
      <div ref={inputRef}></div>

      <br />
      <br />
      <div style={{ display: "flex" }}>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("7")}
        >
          7
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("8")}
        >
          8
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("9")}
        >
          9
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("+")}
        >
          +
        </button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("4")}
        >
          4
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("5")}
        >
          5
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("6")}
        >
          6
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("-")}
        >
          -
        </button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("1")}
        >
          1
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("2")}
        >
          2
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("3")}
        >
          3
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("*")}
        >
          *
        </button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={handleClearButton}
        >
          C
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("0")}
        >
          0
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={handleEqualButton}
        >
          =
        </button>
        <button
          style={{ fontSize: "40px", margin: "3px" }}
          onClick={() => handleButton("/")}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
