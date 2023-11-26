import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import BarChart from "../components/BarChart/index";
//import ScatterChart from "../components/ScatterChart";
import PolarChart from "../components/PolarChart/index";
import DoughnutChart from "../components/DoughnutChart/index";
import StackedBarChart from "@/components/StackedBarChart";
import Bar2Chart from "@/components/Bar2Chart";
import MultitypeChart from "@/components/MultitypeChart";
import Horizontal_Bar from "@/components/Horizontal_Bar";
import Table_Prev from "@/components/Table_Prev";
import Table_Prev1 from "@/components/Table_Prev1";
import StackedBarMenChart from "@/components/StackedBarMenChart";
import StackedBarWomenChart from "@/components/StackedBarWomenChart";
//import theme from "../theme"

const Home = () => {
  return (
    <>
      <Heading mt={"70px"}>
        Drinking behavior in Germany - is within the limits or cause for
        concern?{" "}
      </Heading>
      <Text mt={"60px"}>
        Alcohol is well established in our society and is almost seen as an
        essential companion when it comes to social interaction. At most
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
            of pure alcohol (Deutsche Hauptstelle für Suchtfragen e.V., 2023).
            Excluding the columns for mixed drinks, a closer look at the
            development of pure alcohol per capita also shows a general downward
            trend with occasional short, slight increases over certain years.
            Over the last twenty years, the amount of pure alcohol consumed per
            capita in Germany over a year has fallen from 12 to 10.35 litres.
          </Text>
        </Box>
      </Flex>

      <Text mt={"30px"}>
        Well, that seems to be a good indication that we don't have a
        significant alcohol problem in germany, as consumption behavior is
        steadily improving. Let's consider the situation from a different
        perspective:
      </Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="m" mb={8}>
          In an international comparison, Germany is one of the high-consumption
          countries
        </Heading>
      </Box>

      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Horizontal_Bar />
        </Box>
      </Flex>

      <Box width="100%" mt={"80px"}>
        <Text fontSize="m" mb={8}>
          It may be that people drink less throughout the year, but occasionally
          more excessive
        </Text>
      </Box>

      <Flex>
        <Box width="1000%" mt={"100px"}>
          <Text>
            The individual risk of alcohol-related health problems,
            psychological impairment or social damage increases with the amount
            of alcohol consumed. Even with small average quantities, there is an
            additional risk due to episodic binge drinking, in which large
            quantities of alcohol are consumed within one day. These ifferent
            consumption classes were defined to assess the individual risk based
            on average drinking quantities:
          </Text>
          <Table_Prev />
          <Text>
            The term "low-risk" emphasises that there is no such thing as
            completely risk-free alcohol consumption. Each organ has a specific
            risk in relation to alcohol, and additional risk factors such as
            smoking, obesity, cholesterol levels, lack of exercise, existing
            illnesses and genetic predispositions influence the individual risk
            of disease. Just for your information: 20 g of ethanol per day is
            equivalent to about 0.5 litres of beer, 0.2 litres of wine or 0.06
            litres of spirits, depending on the alcohol content of the beverage
            types.
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box width="1000%" mt={"50px"}>
          <Heading fontSize="m" mb={8} style={{ fontWeight: "bold" }}>
            30-day prevalence of alcohol consumption, extrapolation to the
            18-64-year-old population
          </Heading>
          <Table_Prev1 />
        </Box>
      </Flex>

      <Text mt={"30px"}>
        The table above illustrates the 30-day prevalence of alcohol consumption
        in Germany by gender and consumption patterns. The data comes from the
        Epidemiological Survey on Addiction (ESA) 2021, a representative survey
        of the German population aged 18 to 64. The prevalence of alcohol
        consumption in the last 30 days is 70.5% overall (36.1 million people)
        for the 18 to 64 age group, with a higher prevalence among men (74.8%)
        compared to women (66.0%). Of the alcohol consumers, 33.3 % drank
        episodically, with men (41.9 %) doing so more frequently than women
        (23.3 %). Risky consumption was reported by 21.9% of alcohol consumers,
        with no significant differences found between men (21.1%) and women
        (22.9%). The data continues to show widespread alcohol consumption in
        Germany, with men drinking more frequently and in larger quantities.
        However, the increase in alcohol consumption among women is remarkable.
        Of concern is the significantly higher prevalence of episodic binge
        drinking among men, which is associated with an increased risk of injury
        and health problems. Both men and women have a relatively high
        prevalence of risky consumption, which is a risk factor for alcohol
        dependence and other health problems. The authors of the ESA 2021
        therefore emphasise the continued need for alcohol prevention measures
        in Germany.
      </Text>

      <Flex>
        <Box width="10300%" mt={"100px"}>
          <StackedBarMenChart />
        </Box>
      </Flex>

      <Flex>
        <Box width="10300%" mt={"100px"}>
          <StackedBarWomenChart />
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
          <Text mt={"20px"}>
            The number of inpatient hospital treatments due to acute alcohol
            abuse among children and adolescents aged 10 to 19 fell to around
            11,700 cases in 2021. This corresponds to a decrease of 4.4%
            compared to the previous year (2020: 12,200 cases) and even 42.3%
            less than in the pre-corona year 2019 (20,300 cases). The decline is
            already continuing for the second year and has reached its lowest
            level since 2001. Demographic effects, including a 19% decline in
            the population in the 10-19 age group from 2001 to 2021, are also
            contributing to this decline. In 2021, there was also a decrease of
            9.1% in hospitalisations for acute alcohol intoxication across all
            age groups compared to 2020 and as much as 30.8% less than in
            2019.The data suggests that the coronavirus pandemic, cancelled
            parties and closed venues could have an impact on the decline, and
            demographic changes also play a role. Despite the decline, the risk
            of alcohol poisoning among young people, especially in the 15 to 19
            age group, remains high. In 2021, 9,500 cases were recorded in this
            group, while men, especially in the 45 to 49 age group, are more
            prone to binge drinking.
          </Text>
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
