import React from 'react';
import ForecastForm from './ForecastForm';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { currently, daily } = this.props.weather;
    return (
      <div>
        <h1>{this.props.weather.name}</h1>
        <h2>Current Weather</h2>
        <div style={{ backgroundColor: '#aaaaaa' }}>
          Todays Forecast
          <p>
          Current temperature is
            {' '}
            {Math.round(currently.temperature)}
            {' '}
            Apparent temperature is
            {' '}
            {Math.round(currently.apparentTemperature)}
            {' '}
            High
            {' '}
            {Math.round(daily.data[0].temperatureHigh)}
            {' '}
            Low
            {Math.round(daily.data[0].temperatureLow)}
          </p>
          <p>
            Sun Rise
            {' '}
            {daily.data[0].sunriseTime}
            {' '}
            Sun Set
            {' '}
            {daily.data[0].sunsetTime}
            {' '}
          </p>
          <p>
            Humidity
            {' '}
            {daily.data[0].humidity}
            {'% '}
            Today is
            {' '}
            {currently.summary}
            {' '}
            with Wind speed of
            {' '}
            {daily.data[0].windSpeed}
            {' '}
            mph
            {' '}
            UV index
            {' '}
            {daily.data[0].uvIndex}
          </p>
        </div>
        <br />
        <div>
          <ForecastForm forecasts={daily.data} />
        </div>
      </div>
    );
  }
}

export default Weather;
