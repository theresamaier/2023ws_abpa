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
      <Text mt={"60px"} textAlign="justify">
        Alcohol is well established in our society and is almost seen as an
        essential companion when it comes to social interaction. At most
        corporate parties, business meetings, or even casual get-togethers and
        after-work meetings, drinking is part of our working culture. The same
        applies to university settings: student parties, bar nights, and
        drinking games are an integral part of campus life. The link between
        alcohol and social interaction is so strong that consumption is often
        seen as a means of integrating into the community. Such normalization
        carries risks, as it increases the pressure on those who do not or
        cannot drink alcohol. Furthermore, this can easily turn into excessive
        consumption and alcohol abuse, especially among young people who may not
        have sufficient experience or self-control. We tend not to realize how
        much alcohol is tolerated and how difficult it might be for people with
        a serious alcohol problem to resist this constant confrontation. The
        mere fact that liquor is offered at the supermarket counter to increase
        the likelihood of impulse purchases is ethically doubtful. Particularly
        considering that alcohol has far-reaching social and health effects when
        it goes beyond mere consumption. So what exactly is the situation in
        Germany? Are we being misled by images of alcohol excesses from the
        Oktoberfest or carnival, or does Germany really have an alcohol problem?
      </Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="xl" mb={8}>
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
          <Text mt={"20px"} textAlign="justify">
            In the chart you can see that the consumption of alcoholic beverages
            per capita in Germany amounted to 120.1 liters in 2022. Compared to
            previous years, there has been a slight downward trend in alcohol
            consumption. According to the annual report on addiction, the
            average annual per capita pure alcohol content is around ten litres
            of pure alcohol. Excluding the columns for mixed drinks, a closer
            look at the development of pure alcohol per capita also shows a
            general downward trend with occasional short, slight increases over
            certain years. Over the last twenty years, the amount of pure
            alcohol consumed per capita in Germany over a year has fallen from
            12 to 10.35 litres.
          </Text>
        </Box>
      </Flex>
      <Text mt={"30px"} textAlign="justify">
        Well, that seems to be a good indication that we don&apos;t have a
        significant alcohol problem in Germany, as consumption behavior is
        steadily improving. Let&apos;s consider the situation from a different
        perspective:
      </Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="xl" mb={8}>
          In an international comparison, Germany is one of the high-consumption
          countries
        </Heading>
      </Box>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Horizontal_Bar />
        </Box>
      </Flex>
      <Box width="100%" mt={"20px"}>
        <Text fontSize="m" mb={8} textAlign="justify">
          The table provides an overview of the average alcohol consumption per
          person in Europe including non-OECD countries in 2018, based on data
          from the DHS Yearbook on Addiction 2022. The countries with the
          highest alcohol consumption rates are Latvia (12.6 litres), Austria
          (12.2 litres) and the Czech Republic (11.8 litres). Lower consumption
          rates can be found in Turkey (1.4 litres), North Macedonia (3.8
          litres) and Albania (4.7 litres). Germany is in fifth place with an
          annual average of 10.8 litres and is therefore also classified as a
          high-consumption country. Despite positive developments and a liberal
          alcohol policy, it is therefore recommended to intensify preventive
          measures for the entire population, such as tax increases or reducing
          the availability of alcohol, in order to maintain the positive trend
          and prevent a reversal of the trend!
        </Text>
      </Box>
      <Box width="100%" mt={"50px"}>
        <Text fontSize="m" mb={8} textAlign="justify">
          <strong>Interim summary:</strong> Despite the declining trend of
          alcohol consumption within Germany in recent years, we are still a
          high-consumption country with an average of between 10.35 and 10.8
          litres of pure alcohol per capita per year. If you divide the 10.8
          litres by the number of days in the year, i.e. by 365, you get an
          average of 0.0296 grams of pure alcohol per day. But how do I actually
          know whether my own alcohol consumption is risky or even harmful?
        </Text>
      </Box>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <Text textAlign="justify">
            The individual risk of alcohol-related health problems,
            psychological impairment or social damage increases with the amount
            of alcohol consumed. Even with small average amounts, there is an
            additional risk from episodic binge drinking, where large amounts of
            alcohol are consumed in one day. The following consumption
            categories have been officially defined to assess individual risk
            based on average drinking levels:
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box width="1000%" mt={"20px"}>
          <Table_Prev />
        </Box>
      </Flex>
      <Flex>
        <Box width="1000%" mt={"20px"}>
          <Text textAlign="justify">
            The term &quot;low-risk&quot; emphasizes that there is no such thing
            as completely risk-free alcohol consumption. Each organ has a
            specific risk in relation to alcohol, and additional risk factors
            such as smoking, obesity, cholesterol levels, lack of exercise,
            existing illnesses and genetic predispositions influence the
            individual risk of disease. Just for your information: 20 g of
            ethanol per day is equivalent to about 0.5 litres of beer, 0.2
            litres of wine or 0.06 litres of spirits, depending on the alcohol
            content of the beverage types. Well, I don&apos;t know how you feel,
            but I&apos;m surprised by this strict classification. It feels like
            you&apos;re already in risky or even more dangerous drinking
            categories as soon as you go out on a Friday evening.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box width="1000%" mt={"90px"}>
          <Heading fontSize="xl" mb={8} style={{ fontWeight: "bold" }}>
            30-day prevalence of alcohol consumption, extrapolation to the
            18-64-year-old population
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Box width="1500%" mt={"5px"}>
          <Table_Prev1 />
        </Box>
      </Flex>
      <Text mt={"30px"} textAlign="justify">
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
        therefore emphasize the continued need for alcohol prevention measures
        in Germany.
      </Text>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="xl" mb={8}>
          The average annual alcohol consumption may well have fallen, but
          people drink more excessively on occasion
        </Heading>
        <Text></Text>
      </Box>
      <Flex>
        <Box width="10300%" mt={"5px"}>
          <StackedBarMenChart />
        </Box>
      </Flex>
      <Box width="100%" mt={"20px"}>
        <Text textAlign="justify">
          The following tables show the frequency of binge drinking, which is
          the consumption of 5 or more small alcoholic drinks per drinking
          occasion, broken down by gender and again by age group. It can be seen
          that young men in particular, i.e. those aged 18-24 and 25-34, drink
          excessively at least once a week. For example, 15% of 18-24 year olds
          drink more than 5 drinks in one evening at least once a week. With the
          exception of 25-34 year olds, the percentage of binge drinkers within
          the remaining age groups is more than half this figure.
        </Text>
      </Box>
      <Box width="100%" mt={"40px"}>
        <Text>
          Let&apos;s now take a look at the age distribution of binge drinking
          among women:
        </Text>
      </Box>
      <Flex>
        <Box width="10300%" mt={"60px"}>
          <StackedBarWomenChart />
        </Box>
      </Flex>
      <Box width="100%" mt={"20px"}>
        <Text textAlign="justify">
          Among women, the percentage of binge drinkers is generally lower
          compared to men. But again, the percentage of women in the 18-24 age
          group who consume more than 5 drinks at least once a week on a
          drinking occasion with 5.7% is twice as high as in the other age
          categories.
        </Text>
      </Box>

      <Box width="100%" mt={"40px"}>
        <Text textAlign="justify">
          Overall, there has been a slight downward trend in risky consumption
          and episodic binge drinking since 1995, particularly among men and
          adolescents, and a slight increase in the prevalence of episodic binge
          drinking among women. In contrast, the prevalence of alcohol-related
          disorders has remained largely constant over the past 25 years.
          Overall, however, alcohol consumption in Germany remains at a high
          level.
        </Text>
      </Box>
      <Box width="100%" mt={"80px"}>
        <Heading fontSize="xl" mb={8}>
          Young people in particular are at the mercy of excessive alcohol
          consumption, as can be seen from the alcohol poisoning figures among
          teenagers
        </Heading>
      </Box>
      <Flex>
        <Box width="1000%" mt={"0px"}>
          <StackedBarChart />
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"20px"} textAlign="justify">
            The age effect that young people in particular are affected by
            excessive alcohol consumption and therefore actually need special
            protection is also shown when looking at the alcohol poisoning
            statistics in the chart above, divided into the age groups 10-19 and
            over 19 years old. The number of inpatient hospital treatments due
            to acute alcohol abuse among children and adolescents aged 10 to 19
            fell to around 11,700 cases in 2021. This corresponds to a decrease
            of 4.4% compared to the previous year (2020: 12,233 cases) and even
            42.3% less than in the pre-corona year 2019 (20,272 cases). The
            decline is already continuing for the second year and has reached
            its lowest level since 2001. Demographic effects, including a 19%
            decline in the population in the 10-19 age group from 2001 to 2021,
            are also contributing to this decline. In 2021, there was also a
            decrease of 9.1% in hospitalizations for acute alcohol intoxication
            across all age groups compared to 2020 and as much as 30.8% less
            than in 2019. The data suggests that the coronavirus pandemic,
            cancelled parties and closed venues could have an impact on the
            decline, and demographic changes also play a role. Despite the
            decline, the risk of alcohol poisoning among young people,
            especially in the 15-19 age group, remains high.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box width="70%" mt={"100px"}>
          <Heading fontSize="m" mb={8}>
            The annual costs of harmful alcohol consumption are €57.04 billion
          </Heading>
        </Box>
      </Flex>
      <Box width="100%" mt={"5px"}>
        <DoughnutChart />
      </Box>
      <Flex>
        <Box>
          <Text mt={"100px"} textAlign="justify">
            The annual costs of harmful alcohol consumption amount to 57.04
            billion euros. The graph shows the distribution of costs, with
            reddish areas representing direct costs such as illness and nursing
            costs, while green areas represent indirect costs such as loss of
            productivity. The ratio of direct to indirect costs is 29% to 71%,
            with direct costs of 16.59 billion euros and indirect costs of 40.44
            billion euros.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"15px"} textAlign="justify">
            For a long time, the focus of therapeutic efforts was exclusively on
            people with severe alcohol addiction who sought help in addiction
            counselling centres or cessation facilities, for example. However,
            it has now been recognized that a significant proportion of the
            health costs associated with alcohol consumption are caused by the
            larger group of people with problematic consumption. These people do
            not fulfil the criteria for a dependency disorder. Therefore, from a
            public health perspective, problematic alcohol consumption is now
            seen as a continuum with varying degrees of severity.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"15px"} textAlign="justify">
            Regular alcohol consumption is one of the leading preventable health
            risks, and according to the World Health Organization&apos;s (WHO)
            Global Burden of Disease study, it ranks fifth among the main risk
            factors for disease in men in Germany. However, it is not only
            illness that is a consequence of excessive consumption that harms
            the individual and can also have an impact on the state and thus
            society as a whole, but also criminal offences and accidents. In
            2019, around 222,000 criminal offences were committed under the
            influence of alcohol, and it is estimated that 45.1% of all fatal
            road traffic accidents can be attributed to alcohol consumption.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"15px"} textAlign="justify">
            Costs resulting from incapacity for work and disability due to
            alcohol abuse are also included in the cost calculation for society.
            On the one hand, there are foregone payments as well as actual costs
            such as unemployment compensation or early retirement. Incapacity
            for work and invalidity due to alcohol dependency or alcohol
            psychoses were recorded in around 82,000 cases per year, while early
            retirement occurs in around 6,500 cases per year. Official figures
            published by KKH Kaufmännische Krankenkasse at the end of 2022 give
            cause for concern that this will become even worse in the future and
            therefore the costs are likely to rise further as the number of
            KKH-insured working people with excessive alcohol consumption has
            risen by around a third (32 per cent) nationwide from 2011 to 2021,
            and by as much as 88.5 per cent in the 35-39 age group. In addition
            to binge drinking, this also includes addiction, withdrawal symptoms
            and psychological behavioural disorders caused by alcohol. From the
            pre-corona year 2019 to 2021, the KKH recorded an overall increase
            of more than four per cent, and even 18 per cent in the 40 to 44 age
            group. In addition to medical diagnoses, the average length of sick
            leave per employee addicted to alcohol has also risen. The KKH
            recorded the peak of the past five years in the first year of
            coronavirus, with almost 41 sick days. In 2021 and 2019, the average
            was around 38 days each. 2018 and 2017 were significantly lower at
            around 31 days each. This confirms that there is a need for action
            not only in the national interest, but also on a company level -
            prevention and intervention measures should therefore be initiated
            at both levels.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"15px"} textAlign="justify">
            As can be seen in the chart, the loss of resources due to mortality
            was calculated at 12945.91 million. There is a likelihood that the
            statistics on alcohol-related deaths may be underestimated, as there
            are indications that more deaths are attributable to alcohol
            consumption than currently recorded. This is partly due to a
            significant overlap between the causes of death from tobacco and
            alcohol consumption. Previous estimates suggest that the actual
            number of alcohol-related deaths may be higher, with 26% due to
            alcohol consumption alone and 74% due to the combined consumption of
            alcohol and tobacco. In addition, alcohol consumption is associated
            with a large number of diseases - often even causally, which is
            likely to result in distortions.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box width="70%" mt={"100px"}>
          <Heading fontSize="m" mb={8}>
            Conclusion
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"0px"} textAlign="justify">
            Drawing a conclusion as to whether there is a drinking problem in
            Germany is tricky as it can be interpreted differently depending on
            how it is framed: on the one hand, you can see that Germans consume
            less alcohol per year compared to previous years, but if you look at
            consumption from an international perspective, the annual per capita
            alcohol consumption is very high despite the decline. Even when
            considering the official categorization of problematic drinking
            behavior, the 10 liters per capita distributed over the days of the
            year must be considered alarming. This is because either a not too
            low amount of 29 grams of alcohol per day is consumed on a regular
            basis or occasionally extremely high amounts are consumed, which is
            also known as binge drinking. Especially in my age category, the
            prevalence of drinking behavior categorized as excessive alcohol
            consumption is high. I was not aware and I think most people are not
            aware that the amount we consider normal or standard for a night out
            is already categorized as risky or abusive, which raises questions
            about social norms, collective decisions and the responsibility we
            have towards ourselves and our society. Also the economic burden of
            57.04 billion euros annually should prompt us to question our
            established drink habits in Germany.
          </Text>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Text
            mt={"80px"}
            style={{
              color: "grey",
              fontSize: "15px",
            }}
          >
            Sources: <br></br>
            1. Alkoholkonsum in Deutschland: Zahlen &amp; Fakten. (n.d.).
            Retrieved November 4, 2023, from
            https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/a/alkohol
            <br></br>
            2. Alkoholmissbrauch 2021: 42 % weniger Klinikbehandlungen junger
            Menschen als im Vor-Corona-Jahr 2019. (n.d.). Statistisches
            Bundesamt. Retrieved November 12, 2023, from
            https://www.destatis.de/DE/Presse/Pressemitteilungen/Zahl-der-Woche/2023/PD23_05_p002.html
            <br></br>
            3. BSI.(August 16, 2023). Per capita consumption of alcoholic
            beverages in Germany from 2003 to 2022 (in liters) [Graph]. In
            Statista. Retrieved October 24, 2023, from
            https://www.statista.com/statistics/266167/consumption-of-alcoholic-beverages-in-germany/
            <br></br>
            4. Deutsche Hauptstelle für Suchtfragen e.V. (2023). DHS Jahrbuch
            Sucht 2023. Pabst Science Publishers.
            https://www.dhs.de/unsere-arbeit/dhs-jahrbuch-sucht <br></br>
            5. Kraus, L., Loy, J. K., Wilms, N., &amp; Starker, A. (2021).
            Altersspezifische Trends des risikoreichen Alkoholkonsums in
            Deutschland: Parallele oder unterschiedliche Verläufe?
            Bundesgesundheitsblatt - Gesundheitsforschung - Gesundheitsschutz,
            64(6), 652–659. https://doi.org/10.1007/s00103-021-03328-7<br></br>
            6. Mit dem Flachmann zur Arbeit. (n.d.). Retrieved November 8, 2023,
            from https://www.kkh.de/presse/pressemeldungen/alkoholarbeit
            <br></br>
            7. Porst, M., Von Der Lippe, E., Leddin, J., Anton, A., Wengler, A.,
            Breitkreuz, J., Schüssel, K., Brückner, G., Schröder, H., Gruhl, H.,
            Plaß, D., Barnes, B., Busch, M. A., Haller, S., Hapke, U.,
            Neuhauser, H., Reitzle, L., Scheidt-Nave, C., Schlotmann, A., …
            Rommel, A. (2022). The burden of disease in Germany at the national
            and regional level—Results in terms of disability-adjusted life
            years (DALY) from the BURDEN 2020 study. Deutsches Ärzteblatt
            International. https://doi.org/10.3238/arztebl.m2022.0314
            <br></br>
            8. Rauschert, C., Möckl, J., Seitz, N.-N., Wilms, N., Olderbak, S.,
            &amp; Kraus, L. (2022). The use of psychoactive substances in
            Germany. Deutsches Ärzteblatt International.
            https://doi.org/10.3238/arztebl.m2022.0244<br></br>
            9.Schaller, K., Kahnert, S., Garcia-Verdugo, R., Treede, I., Graen,
            L., &amp; Ouédraogo, N. (2022). Alkoholatlas Deutschland 2022. Pabst
            Science Publishers.
            <br></br>
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text mt={"100px"}></Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
