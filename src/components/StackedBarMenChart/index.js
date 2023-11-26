//import React from "react";
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
//import faker from "faker";

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
    title: {
      display: true,
      text: "Frequency of binge drinking among men divided by age group",
      font: {
        size: 15,
        weight: "bold",
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    y: {
      stacked: true,
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};

const labels = [
  "aged 18-24",
  "aged 25-34",
  "aged 35-44",
  "aged 45-54",
  "aged 55-64",
  "aged 65<",
  "total",
];

export const data = {
  labels,
  datasets: [
    {
      label: "never",
      data: [26.9, 25.4, 34.4, 37.7, 40, 51.7, 37.8],
      backgroundColor: "#B2EBF2",
    },
    {
      label: "less than once a month",
      data: [21.6, 27.6, 25.4, 26.0, 21.2, 19.9, 23.4],
      backgroundColor: "#26C6DA",
    },
    {
      label: "every month",
      data: [36.6, 36, 33.6, 29.8, 31.3, 23.6, 30.9],
      backgroundColor: "#0097A7",
    },
    {
      label: "at least every week",
      data: [15.0, 10.9, 6.6, 6.5, 7.5, 4.8, 7.9],
      backgroundColor: "#006064",
    },
  ],
};

const StackedBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default StackedBarChart;
