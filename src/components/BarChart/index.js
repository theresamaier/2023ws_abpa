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
import faker from "faker";

//import "@fontsource/roboto";

import { index01, data01, index02 } from "./../../data/data01.js";

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
      text: "Per capita consumption of alcoholic beverages in Germany from 2003 to 2022 (in liters)",
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

const labels = index01;

export const data = {
  labels,
  datasets: [
    {
      label: "alcoholic beverages in liter",
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: data01,
      backgroundColor: "#0097A7",
    },
    //{
    //  label: "Dataset 2",
    //  data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //  backgroundColor: "rgba(53, 162, 235, 0.5)",
    //},
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
