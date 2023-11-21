import { Container, Flex, Text } from "@chakra-ui/react";
import LinkNext from "next/link";

const LayoutFooter = () => {
  return (
    <Container minW="100%" color="white" bg="gray.300" p={2} py={4}>
      <Flex
        width="1000px"
        mx="auto"
        justify="space-between"
        fontSize="xl"
        pb={24}
      >
        <Text>
          (c) Theresa Maier -{" "}
          <LinkNext href="https://www.cbs.de">CBS </LinkNext>
        </Text>
        <LinkNext href="/imprint">Imprint</LinkNext>
      </Flex>
    </Container>
  );
};

export default LayoutFooter;
