import React from "react";
import { useState } from "react";
import "./App.css";
import { Buttons } from "./Components/Buttons";
import { Screen } from "./Components/Screen";
import { evaluate } from "mathjs";
import { Button } from "@chakra-ui/react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function App() {
  const [valor, setValor] = useState("");
  const [endValue, setEndValue] = useState("");
  const [error, setError] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const operacion = (value) => {
    if (!ops.includes(value)) {
      setValor((prev) => prev + value);
    } else {
      if (
        !ops.includes(valor.slice(-1))
      ) {
        setValor((prev) => prev + value);
        setError("");
      } else {
        setError("Syntax Error");
      }
    }
  };

  const calculate = () => {
    if (valor) {
      if (!ops.includes(valor.slice(-1))) {
        setValor((prev) =>
          evaluate(prev) === 0 ? (prev = "") : evaluate(prev).toString()
        );
        setEndValue(evaluate(valor));
        setError("");
      } else {
        setError("Syntax Error");
      }
    } else {
      setError("Syntax Error");
    }
  };

  const clear = () => {
    if (valor) {
      setValor("");
      setEndValue("");
    }
  };

  const removeOne = () => {
    setValor((prev) => prev.substring(0, prev.length - 1));
  };

  return (
    <div className="containerApp">
      <div className="contenedor-Calc">
        <div className="contenedor-screen">
          <Screen valor={valor} endValue={endValue} error={error} />
        </div>
        <div className="contenedor-btns">
          <div className="row">
            <Button
              colorScheme="red"
              color="black"
              padding="10px"
              width="64%"
              height="75px"
              marginTop="5px"
              boxShadow="dark-lg"
              onClick={clear}
            >
              C
            </Button>
            <Button
              color="black"
              padding="5px"
              width="20%"
              height="75px"
              marginTop="5px"
              boxShadow="dark-lg"
              onClick={removeOne}
            >
              <RiDeleteBack2Fill fontSize="40" />
            </Button>
          </div>
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
            <Buttons value={"."} operacion={operacion} />
            <Buttons value={"X"} operacion={operacion} />
            <Buttons value={"="} operacion={calculate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
