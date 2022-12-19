import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

const Screen = ({ screen, endValue, error }) => {

  const [errorPopUp, setErrorPopUp] = useState(false)

  useEffect(() => {
    if(error === 'Syntax Error'){
      setErrorPopUp(true)
    }else{
      setErrorPopUp(false)
    }
  },[error])

  return (
    <>
      <Flex flexDirection="column">
        <Flex justifyContent='flex-end'>
        <Box marginRight="5">{errorPopUp ? error : endValue}</Box>
        </Flex>
        <Flex justifyContent='end'>
          <Box marginRight="5" fontSize="sm" fontFamily='cursive'>
            {screen}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export { Screen };
