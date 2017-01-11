import React from 'react';
const LineChart = require('react-chartjs-2').Line;

const LineGraph = ({ currentWeekData, previousWeekData, labels, title }) => {
  let colors = [];
  for(let i = 0; i < previousWeekData.length; i++){
    if(previousWeekData[i] > currentWeekData[i]){
      colors.push("rgba(255, 1, 1, 0.8)");
    }
    else {
      colors.push("rgba(52, 255, 1, 0.8)")
    }
  }
  let chartData = {
    labels: labels,
    datasets: [{
      borderColor: "rgb(89, 89, 89)",
      pointBackgroundColor: colors,
      backgroundColor: colors,
      data: currentWeekData,
      label: 'Current Week',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: colors,
      pointHoverBorderColor: "rgb(89, 89, 89)",
      pointHoverBorderWidth: 2,
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
    fontColor: "rgb(89, 89, 89)",
    fontSize: 18,
    fontFamily: "'Roboto', sans-serif",
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
    <LineChart data={chartData} options={chartOptions} width={350} height={160}/>
  );
}

export default LineGraph;
