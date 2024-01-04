import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
function VisitorGraph() {
  var options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
  };

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
    datasets: [
      {
        label: "Visitors",
        fill: false,
        lineTension: 0.5,
        borderWidth: 1,
        borderColor: "rgba(75, 192, 192, 0.2)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        data: [65, 59, 80, 81, 56, 45, 64],
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
}

export default VisitorGraph;
