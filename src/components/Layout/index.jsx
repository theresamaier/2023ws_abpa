import { Container, Text } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container>
      <Text>Hello</Text>
      <div style={{ color: "green" }}>{children}</div>
    </>
  );
};

export default Layout;
