import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

//import "@fontsource/roboto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: { size: 12 },
      },
    },
    title: {
      text: "Total alcohol consumption (litres per capita) in Europe (incl. non-OECD countries) in 2018 (for adults aged from 15 years)",
      font: {
        size: 15,
        weight: "bold",
      },
      display: true,
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
  },
};

const labels = [
  "Latvia",
  "Austria",
  "Czech Republic",
  "France",
  "Bulgaria",
  "Lithuania",
  "Luxembourg",
  "Ireland",
  "Germany",
  "Poland",
  "Hungary",
  "Portugal",
  "Spain",
  "Romania",
  "Croatia",
  "Slovak Republic",
  "Estonia",
  "Slovenia",
  "United Kingdom",
  "Denmark",
  "Cyprus",
  "Belgium",
  "Montenegro",
  "Switzerland",
  "Finland",
  "Netherlands",
  "Malta",
  "Italy",
  "Iceland",
  "Serbia",
  "Sweden",
  "Greece",
  "Norway",
  "Albania",
  "North Macedonia",
  "Turkey",
];

export const data = {
  labels,
  datasets: [
    {
      label:
        "Countries arranged in descending order in terms of pure alcohol consumption",
      data: [
        12.6, 12.2, 11.8, 11.6, 11.4, 11.2, 11.0, 11.0, 10.8, 10.7, 10.7, 10.4,
        10.4, 10.1, 10.1, 10.1, 10.1, 10.0, 10.0, 9.8, 9.7, 9.6, 9.4, 9.3, 9.1,
        8.4, 8.3, 7.9, 7.8, 7.7, 7.4, 7.2, 6.1, 6.0, 4.7, 3.8, 1.4,
      ],
      backgroundColor: [
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#0097A7",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
        "#80DEEA",
      ],
    },
  ],
};

const Bar2Chart = () => {
  return <Bar options={options} data={data} />;
};

export default Bar2Chart;
