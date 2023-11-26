import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { data02 } from "@/data/data02";
import { data01, index01 } from "@/data/data01";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = index01;

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "pure alcohol",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: data02,
    },
    {
      type: "bar",
      label: "alcoholic mixed drinks",
      backgroundColor: "#0097A7",
      data: data01,
    },
  ],
};

const MultitypeChart = () => {
  return <Chart data={data} />;
};

export default MultitypeChart;
