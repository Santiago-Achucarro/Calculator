import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Buttons = ({ value, operacion, screen }) => {
  const obtainData = (e) => {
    let valor = e.target.value;
    if (valor == "X") {
      valor = "*";
    }
    if (valor == "%") {
      valor = "/";
    }
    if(valor){
      operacion(valor);
    }
  };

  const test = (e) => {
    let valor = e.key;
    if (valor == "x" || valor == "X") {
      valor = "*";
    }
    if (typeof valor == "number") {
      operacion(valor);
    }
  };

  return (
    <Button
      value={value}
      onKeyUp={(e) => test(e)}
      onClick={(e) => obtainData(e)}
      fontFamily="cursive"
    >
      {value}
    </Button>
  );
};

export { Buttons };
