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
      text: "Hospital admissions due to acute alcohol intoxication",
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
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

export const data = {
  labels,
  datasets: [
    {
      label: "10-19 year olds",
      data: [
        9514, 11466, 12807, 14105, 16423, 19449, 19423, 23165, 25709, 26428,
        25995, 26351, 26673, 23267, 22391, 21907, 22309, 21721, 20635, 20272,
        12233, 11692,
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "> 19 years",
      data: [
        44527, 49829, 50317, 56457, 64789, 69489, 68112, 75397, 83574, 88092,
        89441, 90166, 94922, 93236, 96171, 92089, 93147, 90118, 82389, 79844,
        64012, 57577,
      ],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const StackedBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default StackedBarChart;
