import React,{ useState } from "react";
import "./Chart.css";
import  "./BarChart.js";
import  "./LineChart.js";
import  "./PieChart.js";
import { BloodData } from "./Data";

function DataAndChart() {
  const [bloodData, setBloodData] = useState({
    labels: BloodData.map((data) => data.bloodType),
    datasets: [
      {
        label: "Units Available",
        data: BloodData.map((data) => data.unitsAvailable),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="chart">
      <div style={{ width: 700 }}>
        <BarChart chartData={bloodData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={bloodData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={bloodData} />
      </div>





    </div>
  );
}

export default DataAndChart;
