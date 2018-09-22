import React from 'react';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { forecasts, sunRise, sunSet } = this.props;
    let count = 0;
    return (
      <div>
        {forecasts.map((weather) => {
          count++;
          return (
            <div>
              <h2>
                Day
                {count}
              </h2>
              <p>
              High
              &nbsp;
                {Math.round(weather.temperatureHigh)}
                &deg;F
                &nbsp;
              Low
              &nbsp;
                {Math.round(weather.temperatureLow)}
                &deg;F
              </p>
              <p>
                Sun Rise
                &nbsp;
                {sunRise(weather.sunriseTime)}
                &nbsp;
                Sun Set
                &nbsp;
                {sunSet(weather.sunsetTime)}
                &nbsp;
              </p>
              <p>
                Humidity
                &nbsp;
                {weather.humidity}
                {'% '}
                Today is
                &nbsp;
                {weather.summary}
                &nbsp;
                Wind speed of
                &nbsp;
                {weather.windSpeed}
                &nbsp;
                mph
                &nbsp;
                UV index
                &nbsp;
                {weather.uvIndex}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Forecast;
