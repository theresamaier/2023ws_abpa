import { Heading, Text, Box, Flex, Table } from "@chakra-ui/react";
import BarChart from "../components/BarChart/index";
//import ScatterChart from "../components/ScatterChart";
import PolarChart from "../components/PolarChart/index";
import DoughnutChart from "../components/DoughnutChart/index";
import StackedBarChart from "@/components/StackedBarChart";
import Bar2Chart from "@/components/Bar2Chart";
import MultitypeChart from "@/components/MultitypeChart";
import Horizontal_Bar from "@/components/Horizontal_Bar";
import Table_Prev from "@/components/Table_Prev";
//import theme from "../theme"

const Home = () => {
  return (
    <>
      <Heading mt={"70px"}>
        Test - if this is working! Drinking behavior in Germany - is within the
        limits or cause for concern?{" "}
      </Heading>
      <Text mt={"60px"}>
        Test - Alcohol is well established in our society and is almost seen as
        an essential companion when it comes to social interaction. At most
        corporate parties, business meetings or even casual get-togethers and
        after-work meetings, drinking is part of our working culture. The same
        applies to university settings: student parties, bar nights and drinking
        games are an integral part of campus life. The link between alcohol and
        social interaction is so strong that consumption is often seen as a
        means of integrating into the community. Such a normalization carries
        risks, as it increases the pressure on those who do not or cannot drink
        alcohol. Furthermore, this can easily turn into excessive consumption
        and alcohol abuse, especially among young people who may not have
        sufficient experience or self-control. We tend not to realize how much
        alcohol is tolerated and how difficult it might be for people with a
        serious alcohol problem to resist this constant confrontation. The mere
        fact that liquor is offered at the supermarket counter to increase the
        likelihood of impulse purchases is ethically doubtful. Particularly
        considering that alcohol has far-reaching social and health effects when
        it goes beyond mere consumption. So what exactly is the situation in
        Germany? Are we being misled by images of alcohol excesses from the
        Oktoberfest or carnival, or does Germany really have an alcohol problem?
      </Text>

      <Text mt={"30px"}>Pay attention, here is the first graph.</Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="m" mb={8}>
          Looking at the consumption of alcohol over the last 20 years, a
          decrease from 147 to 120 litres can be observed
        </Heading>
      </Box>

      <Flex>
        <Box width="1000%" mt={"0px"}>
          <MultitypeChart />
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Text mt={"20px"}>
            In the chart you can see that the consumption of alcoholic beverages
            per capita in Germany amounted to 120.1 liters in 2022. Compared to
            previous years, there has been a slight downward trend in alcohol
            consumption. According to the annual report on addiction, the
            average annual per capita pure alcohol content is around ten litres
            of pure alcohol.(Deutsche Hauptstelle für Suchtfragen e.V., 2023)
          </Text>
        </Box>
      </Flex>

      <Text mt={"30px"}>Pay attention, here is the first graph.</Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="m" mb={8}>
          In an international comparison, Germany is one of the high-consumption
          countries
        </Heading>
      </Box>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Bar2Chart />
        </Box>
      </Flex>

      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Horizontal_Bar />
        </Box>
      </Flex>

      <Flex>
        <Box width="70%" mt={"80px"}>
          <Heading fontSize="m" mb={8}>
            The annual costs of harmful alcohol consumption are €57.04 billion
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <DoughnutChart />
        </Box>
        <Box>
          <Text mt={"100px"}>
            The graph on the left shows the distribution of costs due to harmful
            alcohol consumption. The red fields represent direct costs, such as
            illness and care costs, while the green colours represent indirect
            costs, such as loss of productivity. The ratio of direct to indirect
            costs is 29% to 71%, with 16.59 billion euros in direct costs and
            40.44 billion in indirect costs.
          </Text>
        </Box>
      </Flex>

      <Box width="100%" mt={"80px"}>
        <Heading fontSize="m" mb={8}>
          Despite falling case numbers, the risk of alcohol poisoning among
          teenagers remains particularly high
        </Heading>
      </Box>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <StackedBarChart />
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Text mt={"20px"}>In the chart you can see that the tbd</Text>
        </Box>
      </Flex>

      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Table_Prev />
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Text mt={"20px"}>
            Sources: <br></br>
            1. BSI.(August 16, 2023). Per capita consumption of alcoholic
            beverages in Germany from 2003 to 2022 (in liters) [Graph]. In
            Statista. Retrieved October 24, 2023, from
            https://www.statista.com/statistics/266167/consumption-of-alcoholic-beverages-in-germany/
            <br></br>
            2. Deutsche Hauptstelle für Suchtfragen e.V. (2023). DHS Jahrbuch
            Sucht 2023. Pabst Science Publishers.
            https://www.dhs.de/unsere-arbeit/dhs-jahrbuch-sucht <br></br>
            3.Schaller, K., Kahnert, S., Garcia-Verdugo, R., Treede, I., Graen,
            L., & Ouédraogo, N. (2022). Alkoholatlas Deutschland 2022. Pabst
            Science Publishers.<br></br>
            4.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
