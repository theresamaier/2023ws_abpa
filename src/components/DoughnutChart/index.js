import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // Titel wird nicht angezeigt
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Test Titel",
        font: {
          size: 15,
          weight: "bold",
        },
      },
    },
  },
  labels: [
    "Medical expenses",
    "Nursing costs",
    "Rehabilitation programmes",
    "Services for participation in working life",
    "Accidents",
    "Resource loss due to mortality",
    "Long-term unemployment (Arbeitslosengeld II)",
    "Work incapacity",
    "Short-term unemployment (Arbeitslosengeld I)",
    "Reduced earning capacity due to early retirement",
    "Productivity losses due to the need for care",
    "Time of rehabilitation measures",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        13675.73, 1971.11, 746.6, 110.35, 89.3, 12945.91, 10343.16, 5803.54,
        4782.4, 3269.6, 2115.48, 1182.06,
      ],
      backgroundColor: [
        "#EF9A9A",
        "#EF5350",
        "#E53935",
        "#C62828",
        "#EF9A9A",
        "#B2EBF2",
        "#80DEEA",
        "#26C6DA",
        "#00ACC1",
        "#0097A7",
        "#00838F",
        "#006064",
      ],
      borderColor: [
        "#EF9A9A",
        "#EF5350",
        "#E53935",
        "#C62828",
        "#EF9A9A",
        "#B2EBF2",
        "#80DEEA",
        "#26C6DA",
        "#00ACC1",
        "#0097A7",
        "#00838F",
        "#006064",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
