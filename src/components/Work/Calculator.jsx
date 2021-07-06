import React, { useState } from "react";
import Card from "../UI/Card";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.name));
  };

  const clearHandler = () => {
    setResult("");
  };

  const backspaceHandler = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const resultHandler = () => {
    setResult(eval(result).toString());
  };
  return (
    <Card>
      <div className="container">
        <input type="text" value={result} />

        <div className="inpBtn">
          <button id="clearBtn" className="highLight" onClick={clearHandler}>
            Clear
          </button>
          <button id="backBtn" className="highLight" onClick={backspaceHandler}>
            C
          </button>
          <button name="/" className="highLight" onClick={clickHandler}>
            &divide;
          </button>
          <button name="7" onClick={clickHandler}>
            7
          </button>
          <button name="8" onClick={clickHandler}>
            8
          </button>
          <button name="9" onClick={clickHandler}>
            9
          </button>
          <button name="*" className="highLight" onClick={clickHandler}>
            &times;
          </button>
          <button name="4" onClick={clickHandler}>
            4
          </button>
          <button name="5" onClick={clickHandler}>
            5
          </button>
          <button name="6" onClick={clickHandler}>
            6
          </button>
          <button name="-" className="highLight" onClick={clickHandler}>
            &ndash;
          </button>
          <button name="1" onClick={clickHandler}>
            1
          </button>
          <button name="2" onClick={clickHandler}>
            2
          </button>
          <button name="3" onClick={clickHandler}>
            3
          </button>
          <button name="+" className="highLight" onClick={clickHandler}>
            &#43;
          </button>
          <button name="0" onClick={clickHandler}>
            0
          </button>
          <button name="." className="highLight" onClick={clickHandler}>
            .
          </button>
          <button id="equalBtn" className="highLight" onClick={resultHandler}>
            =
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Calculator;
