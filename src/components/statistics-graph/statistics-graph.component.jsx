import React, { useEffect } from "react";
import Chart from "chart.js";
import { connect } from "react-redux";

import {
  selectCartHistoryDates,
  selectTotalShopQuantity,
} from "../../redux/shopping-history/shopping-history.selectors";

/* Styling */
import "./statistics-graph.styles.scss";

const StatisticsGraph = ({ labels, data }) => {
  useEffect(() => {
    const statisticsGraphId = document.getElementById("statistics");
    new Chart(statisticsGraphId, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: ["rgba(240, 238, 238, 0.02)"],
            borderColor: "#44bf40",
            order: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          position: "top",
          text: "Your Shopping Data",
          fontSize: "17",
          fontColor: "#3f3d56",
          fontStyle: "bold",
          fontFamily: "'Quicksand'",
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },

        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Items bought",
                fontSize: "17",
                fontColor: "#3f3d56",
                fontStyle: "bold",
                fontFamily: "'Quicksand'",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Purchase Day",
                fontSize: "17",
                fontColor: "#3f3d56",
                fontStyle: "bold",
                fontFamily: "'Quicksand'",
              },
            },
          ],
        },
      },
    });
  }, [data, labels]);

  return (
    <div className="statistics__graph">
      <canvas
        id="statistics"
        aria-label="Shopping Cart Statistics"
        role="img"
      ></canvas>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    labels: selectCartHistoryDates(state),
    data: selectTotalShopQuantity(state),
  };
};
export default connect(mapStateToProps)(StatisticsGraph);
