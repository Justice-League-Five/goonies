import React from 'react';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { forecasts } = this.props;
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
                {' '}
                {Math.round(weather.temperatureHigh)}
                {' '}
              Low
                {Math.round(weather.temperatureLow)}
              </p>
              <p>
                Sun Rise
                {' '}
                {weather.sunriseTime}
                {' '}
                Sun Set
                {' '}
                {weather.sunsetTime}
                {' '}
              </p>
              <p>
                Humidity
                {' '}
                {weather.humidity}
                {'% '}
                Today is
                {' '}
                {weather.summary}
                {' '}
                with Wind speed of
                {' '}
                {weather.windSpeed}
                {' '}
                mph
                {' '}
                UV index
                {' '}
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
