import React from 'react';
const LineChart = require('react-chartjs-2').Line;

const LineGraph = ({ currentWeekData, previousWeekData, labels, title }) => {
  let chartData = {
    labels: labels,
    datasets: [{
      borderColor: "rgb(89, 89, 89)",
      pointBackgroundColor: "rgba(52, 255, 1, 1)",
      backgroundColor: "rgba(52, 255, 1, 0.6)",
      data: currentWeekData,
      label: 'Current Week'
    },
    {
      borderColor: "rgb(221, 221, 221)",
      pointBackgroundColor: "rgba(191, 191, 191, 1)",
      backgroundColor: "rgba(235, 235, 235, 0.8)",
      data: previousWeekData,
      label: 'Previous Week'
    }],
  };

let chartOptions = {
  title: {
    text: title,
    display: true,
    fontColor: "#DDD",
    fontSize: 14,
    fontFamily: "'Roboto Slab', serif",
    fontStyle: "100"
  },
  scales: {
    yAxes: [{
      display: true,
    }]
  },
  legend: {
    display: true,
    labels: {
      boxWidth: 60,
    }
  },
};

  return (
    <LineChart data={chartData} options={chartOptions} width={450} height={160}/>
  );
}

export default LineGraph;
