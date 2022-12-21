import { Button } from "@chakra-ui/react";
import React from "react";

const Buttons = ({ value, operacion }) => {

  const obtainData = (e) => {
    let valor = e.target.value;
    if (valor == "X") {
      valor = "*";
    }
    if (valor == "%") {
      valor = "/";
    }
    operacion(valor);
  };

  return (
    <Button
      value={value}
      colorScheme={value === "C" ? "red" : "fullwhite.500"}
      onClick={(e) => obtainData(e)}
    >
      {value}
    </Button>
  );
};

export { Buttons };
