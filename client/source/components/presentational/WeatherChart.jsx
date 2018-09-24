import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherChart = (forecast) => {
  const { forecasts } = forecast;
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'],
    datasets: [
      {
        label: 'Highs and Lows for the next 8 days',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(255,99,71,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          forecasts[0].temperatureHigh,
          forecasts[1].temperatureHigh,
          forecasts[2].temperatureHigh,
          forecasts[3].temperatureHigh,
          forecasts[4].temperatureHigh,
          forecasts[5].temperatureHigh,
          forecasts[6].temperatureHigh,
          forecasts[7].temperatureHigh],
      },
      {
        label: 'Low for the next 8 days',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          forecasts[0].temperatureLow,
          forecasts[1].temperatureLow,
          forecasts[2].temperatureLow,
          forecasts[3].temperatureLow,
          forecasts[4].temperatureLow,
          forecasts[5].temperatureLow,
          forecasts[6].temperatureLow,
          forecasts[7].temperatureLow,
        ],
      },
    ],
  };

  return (
    <div className="weatherChart" >
      <h2>Weekly Highs</h2>
      <Line data={data} />
    </div>
  );
};

export default WeatherChart;
