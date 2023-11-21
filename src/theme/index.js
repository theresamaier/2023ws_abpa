import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      "html body": {
        fontSize: "20px",
      },
      a: { textDecoration: "none", _hover: { color: "cyan.800" } },
    },
  },
});

export default theme;
