import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: {
          fullwhite: "white"
        },
      },
    },
  },
});
