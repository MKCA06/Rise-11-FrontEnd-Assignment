"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Revenue() {
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
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Course bill",
        fill: false,
        lineTension: 0.5,
        borderWidth: 2,
        borderColor: "black",
        data: [65, 59, 80, 81, 56, 45, 64, 23, 56, 32, 56, 44],
      },
      {
        label: "Course sell",
        fill: false,
        lineTension: 0.5,
        borderWidth: 2,
        borderColor: "purple",
        data: [45, 69, 83, 16, 86, 15, 84, 43, 96, 32, 26, 74],
      },
    ],
  };

  return (
    <>
      <div className="w-full  h-auto">
        <div className="">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default Revenue;
