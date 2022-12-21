import { Button } from "@chakra-ui/react";
import React from "react";
import "./Buttons.css";

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
      onClick={(e) => obtainData(e)}
      className="btnHover"
      color="black"
      padding="5px"
      width="20%"
      height="75px"
      marginTop="5px"
      boxShadow="dark-lg"
    >
      {value}
    </Button>
  );
};

export { Buttons };
