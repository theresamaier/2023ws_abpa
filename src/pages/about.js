import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import Map from "@/components/Map";
import MapChart from "@/components/MapChart";

const PageAbout = () => {
  return (
    <Container minW="1000px" p={0}>
      <Heading>About</Heading>
      <Flex>
        <Box>
          <Text mt={"20px"}>
            Hi, this is Theresa. This is about me. I am the designer of this
            page. I am currently studying Digital Transformation Management at
            CBS International Business School in Cologne Germany!{" "}
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"10px"}>
            We are represented in Germany with seven locations in Cologne,
            Mainz, Berlin/ Potsdam, Aachen, Brühl, Neuss and Solingen. Hover the
            the map to see how many students are currently studying at CBS!{" "}
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box width="1000%" mt={"30px"}>
          <Map />
        </Box>
      </Flex>

      <Flex>
        <Box width="1000%" mt={"0px"}></Box>
      </Flex>
    </Container>
  );
};

export default PageAbout;
