import React from "react";
import { useState } from "react";
import "./App.css";
import { Buttons } from "./Components/Buttons";
import { Screen } from "./Components/Screen";
import { evaluate, prodDependencies, typeOf } from "mathjs";
import { useRef } from "react";

function App() {
  const [valor, setValor] = useState("");
  const [endValue, setEndValue] = useState("");
  const [error, setError] = useState("");
  const ops = ["/", "*", "+", "-"];

  const operacion = (value) => {
    if (!ops.includes(value)) {
      setValor((prev) => prev + value);
    } else {
      if (!ops.includes(valor.slice(-1))) {
        setValor((prev) => prev + value);
      } else {
        console.log("no podes añadir otra operacion");
      }
    }
  };

 
  const calculate = () => {
    try {
      if (valor) {
        if(!ops.includes(valor.slice(-1))){
          setValor((prev) =>
          evaluate(prev) === 0 ? (prev = "") : evaluate(prev).toString()
        );
        setEndValue(evaluate(valor));
        }else{
          console.log("calculo no permitido")
        }
      } else {
        setError("Syntax error");
      }
    } catch (error) {
      setValor("");
    }
  };

  const clear = () => {
    if (valor) {
      setValor("");
    }
  };

  return (
    <div className="containerApp">
      <div className="contenedor-Calc">
        <div className="contenedor-screen">
          <Screen valor={valor} endValue={endValue} error={error} />
        </div>
        <div className="contenedor-btns">
          <div className="row">
            <Buttons value={7} operacion={operacion} />
            <Buttons value={8} operacion={operacion} />
            <Buttons value={9} operacion={operacion} />
            <Buttons value={"+"} operacion={operacion} />
          </div>
          <div className="row">
            <Buttons value={4} operacion={operacion} />
            <Buttons value={5} operacion={operacion} />
            <Buttons value={6} operacion={operacion} />
            <Buttons value={"-"} operacion={operacion} />
          </div>
          <div className="row">
            <Buttons value={1} operacion={operacion} />
            <Buttons value={2} operacion={operacion} />
            <Buttons value={3} operacion={operacion} />
            <Buttons value={"%"} operacion={operacion} />
          </div>
          <div className="row">
            <Buttons value={0} operacion={operacion} />
            <Buttons value={"C"} operacion={clear} />
            <Buttons value={"="} operacion={calculate} />
            <Buttons value={"X"} operacion={operacion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
