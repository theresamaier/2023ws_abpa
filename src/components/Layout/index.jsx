import { Container, Text, Box } from "@chakra-ui/react";
import LayoutHeader from "../LayoutHeader";
import LayoutFooter from "../LayoutFooter";
//import "@fontsource/smooch-sans";
import "@fontsource/roboto";

const Layout = ({ children }) => {
  return (
    <Container
      minW="100%"
      bgGradient="linear(blue.100 0%, teal.50 25%, gray.200 60%)"
      p={0}
    >
      <LayoutHeader />
      <main>
        <Box width="1000px" mx="auto" minHeight="80vh" px={4}>
          {children}
        </Box>
      </main>
      <LayoutFooter />
    </Container>
  );
};

export default Layout;
