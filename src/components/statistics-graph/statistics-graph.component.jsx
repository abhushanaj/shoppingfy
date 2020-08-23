import React, { useEffect } from "react";
import Chart from "chart.js";

import "./statistics-graph.styles.scss";

const StatisticsGraph = () => {
  useEffect(() => {
    const statisticsGraphId = document.getElementById("statistics");
    new Chart(statisticsGraphId, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Number of Items Shopped",
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className="statistics__graph">
      <canvas id="statistics"></canvas>
    </div>
  );
};

export default StatisticsGraph;
