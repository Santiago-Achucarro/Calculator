import React from "react";
import { useState } from "react";
import "./App.css";
import { Buttons } from "./Components/Buttons";
import { Screen } from "./Components/Screen";
import { evaluate, prodDependencies,  } from "mathjs";
import { useRef } from "react";

function App() {
  const [screen, setScreen] = useState("");
  const [endValue, setEndValue] = useState("");
  const [error, setError] = useState("");
  const ops = ["/", "*", "+", "-"];

  const operacion = (value) => {
    setScreen((prev) => prev + value);
  };
  const calculate = () => {
    try {
      if (screen || evaluate(screen) ) {
        setScreen((prev) =>
          evaluate(prev) === 0 ? (prev = "") : evaluate(prev)
        );
        setEndValue(evaluate(screen));
      } else {
        setError("Syntax error");
      }
    } catch (error) {
      console.log(error)
      setScreen('')
    }
  };

  const clear = () => {
    if (screen) {
      setScreen("");
    }
  };

  return (
    <div className="containerApp">
      <div className="contenedor-Calc">
        <div className="contenedor-screen">
          <Screen screen={screen} endValue={endValue} error={error} />
        </div>

        <div className="contenedor-btns">
          <div className="row">
            <Buttons value={7} operacion={operacion} screen={screen} />
            <Buttons value={8} operacion={operacion} screen={screen} />
            <Buttons value={9} operacion={operacion} screen={screen} />
            <Buttons value={"+"} operacion={operacion} screen={screen} />
          </div>
          <div className="row">
            <Buttons value={4} operacion={operacion} screen={screen} />
            <Buttons value={5} operacion={operacion} screen={screen} />
            <Buttons value={6} operacion={operacion} screen={screen} />
            <Buttons value={"-"} operacion={operacion} screen={screen} />
          </div>
          <div className="row">
            <Buttons value={1} operacion={operacion} screen={screen} />
            <Buttons value={2} operacion={operacion} screen={screen} />
            <Buttons value={3} operacion={operacion} screen={screen} />
            <Buttons value={"%"} operacion={operacion} screen={screen} />
          </div>
          <div className="row">
            <Buttons value={0} operacion={operacion} screen={screen} />
            <Buttons value={"C"} operacion={clear} screen={screen} />
            <Buttons value={"="} operacion={calculate} screen={screen} />
            <Buttons value={"X"} operacion={operacion} screen={screen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
