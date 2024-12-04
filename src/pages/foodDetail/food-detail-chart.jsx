import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Filler
);

const LineChartWithSameValue = () => {
  // Ma'lumotlar
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Revenue",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Apr va May qiymatlari bir xil
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(75,192,192,0.2)");
          gradient.addColorStop(1, "rgba(75,192,192,0)");
          return gradient;
        },
        borderColor: "#4bc0c0",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: (context) => {
          const index = context.dataIndex;
          return index === 3 || index === 4 ? "#ff0000" : "#4bc0c0"; // Apr va May oylari qizil
        },
        pointRadius: (context) => {
          const index = context.dataIndex;
          return index === 3 || index === 4 ? 6 : 4; // Apr va May nuqtalari kattaroq
        },
        pointHoverRadius: 6,
      },
    ],
  };

  // Parametrlar
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => `Date: ${tooltipItems[0].label}`,
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            if (tooltipItem.label === "Apr" || tooltipItem.label === "May") {
              return `$${value * 1000} (Apr - May, 2020)`; // Apr va May uchun bir xil tooltip
            }
            return `$${value}k`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "#4bc0c0",
        borderWidth: 1,
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
      <div style={{  height: "100%" }}>
        <Line data={data} options={options} />
    </div>
  );
};

export default LineChartWithSameValue;
