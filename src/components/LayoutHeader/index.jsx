import { Container, Flex, Link as LinkChakra, Text } from "@chakra-ui/react";
import LinkNext from "next/link";

const LayoutHeader = () => {
  return (
    <Container color="white" bg="blue.200" minW="100%" p={0}>
      <Flex
        width="1000px"
        mx="auto"
        fontSize="xl"
        p={4}
        mb={8}
        justify="space-between"
      >
        <LinkNext href="/">Applied Business Programming & Analytics</LinkNext>
        <LinkNext href="/about">About</LinkNext>
      </Flex>
    </Container>
  );
};

export default LayoutHeader;
