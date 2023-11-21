import React from "react";
import WorldMap from "react-svg-worldmap";
import { Container, Heading, Text } from "@chakra-ui/react";
const Map = () => {
  const data = [{ country: "DE", value: 3000 }];
  return (
    <div className="App">
      <WorldMap
        color="black"
        backgroundColor="rgba(0,0,0,0)"
        title="Location of CBS Business School"
        value-suffix="$"
        size="responsive"
        data={data}
      />
    </div>
  );
};
export default Map;
