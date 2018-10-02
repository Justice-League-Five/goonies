import React from 'react';
import axios from 'axios';
import ForecastForm from './ForecastForm';
import WeatherChart from './WeatherChart';

class YosemiteWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sunRise, sunSet } = this.props;
    const { currently, daily } = this.props.weather;
    return (
      <div>
        <h1>Yosemite</h1>
        <h2>Current Weather</h2>
        <button type="button" onClick={this.props.changeWeather}>
          YellowStone
        </button>
        <div
          className="currentWeather"
          style={{ backgroundColor: '#aaaaaa', padding: 15 }}
        >
          Todays Forecast
          <p>
            Current temperature is &nbsp;
            {Math.round(currently.temperature)}
            &deg;F &nbsp; Feels like &nbsp;
            {Math.round(currently.apparentTemperature)}
            &deg;F &nbsp; High &nbsp;
            {Math.round(daily.data[0].temperatureHigh)}
            &deg;F &nbsp; Low &nbsp;
            {Math.round(daily.data[0].temperatureLow)}
            &deg;F
          </p>
          <p>
            Sun Rise &nbsp;
            {this.props.sunRise()}
            &nbsp; Sun Set &nbsp;
            {this.props.sunSet()}
            &nbsp;
          </p>
          <p>
            Humidity &nbsp;
            {daily.data[0].humidity}
            &nbsp; Today is
            {currently.summary}
            &nbsp; with Wind speed of &nbsp;
            {daily.data[0].windSpeed}
            &nbsp; mph &nbsp; UV index &nbsp;
            {daily.data[0].uvIndex}
          </p>
        </div>
        <br />
        <WeatherChart forecasts={daily.data} />
        <div>
          <ForecastForm
            forecasts={daily.data}
            sunRise={sunRise}
            sunSet={sunSet}
          />
        </div>
      </div>
    );
  }
}

export default YosemiteWeather;
