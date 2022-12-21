import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

const Screen = ({ endValue, error, valor }) => {

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
        <Box marginRight="5" >
          <Text>{errorPopUp ? error : endValue}</Text>
        </Box>
        </Flex>
        <Flex justifyContent='end'>
          <Box marginRight="5" fontSize="sm" fontFamily='cursive'>
            {valor}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export { Screen };
