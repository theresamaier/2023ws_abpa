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
      text: "Frequency of binge drinking among women divided by age group",
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
      data: [38.6, 46.6, 51.1, 52.2, 58.1, 70.5, 56.4],
      backgroundColor: "#EF9A9A",
    },
    {
      label: "less than once a month",
      data: [24.3, 27.3, 26.2, 24.5, 20.8, 13.8, 21.4],
      backgroundColor: "#EF5350",
    },
    {
      label: "every month",
      data: [31.4, 23.6, 21.6, 21.6, 21.2, 19.4, 14.2, 20.1],
      backgroundColor: "#E53935",
    },
    {
      label: "at least every week",
      data: [5.7, 2.5, 1.0, 2.1, 1.7, 1.5, 2.1],
      backgroundColor: "#C62828",
    },
  ],
};

const StackedBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default StackedBarChart;
