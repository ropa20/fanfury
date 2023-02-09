import React from "react";
import Chart from "react-google-charts";

const MyChart = () => {
  const data = [
    ["Month", "a", "b", "c", "d"],
    ["Jan", 20, 28, 38, 45],
    ["", 30, 38, 49, 50],
    ["Feb", 31, 38, 55, 66],
    ["", 30, 38, 49, 50],
    ["Mar", 50, 55, 77, 80],
    ["", 30, 38, 49, 50],
    ["Apr", 77, 77, 66, 50],
    ["", 30, 38, 49, 50],
    ["May", 68, 66, 22, 15],
    ["", 30, 38, 49, 50],
    ["Jun", 20, 28, 38, 45],
    ["", 30, 38, 49, 50],
    ["Jul", 31, 38, 55, 66],
    ["", 30, 38, 49, 50],
    ["Aug", 50, 55, 77, 80],
    ["", 30, 38, 49, 50],
    ["Sep", 77, 77, 66, 50],
    ["", 30, 38, 49, 50],
    ["Oct", 68, 66, 22, 15],
    ["", 30, 38, 49, 50],
    ["Nov", 77, 77, 66, 50],
    ["", 30, 38, 49, 50],
    ["Dec", 68, 66, 22, 15],
    ["", 30, 38, 49, 50],
  ];
  const options = {
    legend: "none",
    bar: { groupWidth: "30%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#352F7C" }, // dark
      risingColor: { strokeWidth: 0, fill: "#675AFF" }, // light
    },
    backgroundColor: "transparent",
    colors: ["#352F7C"],
    hAxis: {
      textStyle: { color: "#9E9E9E" },
      gridlines: {
        color: "none",
      },
    },
    vAxis: {
      textStyle: { color: "#9E9E9E" },
      gridlines: {
        color: "none",
      },
    },
    chartArea: { left: 24, top: 5, width: "100%", height: "81%" },
  };
  return (
    <div className="container">
      <Chart chartType="CandlestickChart" data={data} options={options} />
    </div>
  );
};

export default MyChart;
