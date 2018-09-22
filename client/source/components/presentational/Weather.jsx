import React from 'react';
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import ForecastForm from './ForecastForm';
import YosemiteWeather from './YosemiteWeather';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      park: 'YellowStone',
      collapse: false,
    };
    this.sunRise = this.sunRise.bind(this);
    this.sunSet = this.sunSet.bind(this);
    this.changeWeather = this.changeWeather.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  changeWeather() {
    if (this.state.park === 'YellowStone') {
      this.setState({ park: 'Yosemite' });
    } else {
      this.setState({ park: 'YellowStone' });
    }
  }

  toggle() {
    console.log('click')
    this.setState({ collapse: !this.state.collapse });
  }

  sunRise() {
    const { daily } = this.props.weather.yellowstone;
    const unix = daily.data[0].sunriseTime;
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  sunSet() {
    const { daily } = this.props.weather.yellowstone;
    const unix = daily.data[0].sunsetTime;
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  render() {
    const { currently, daily } = this.props.weather.yellowstone;
    if (this.state.park === 'Yosemite') {
      return (
        <YosemiteWeather
          weather={this.props.weather.yosemite} 
          changeWeather={this.changeWeather}
          sunRise={this.sunRise}
          sunSet={this.sunSet}
        />
      );
    }
    return (
      <div>
        <h1>{this.state.park}</h1>
        <h2>Current Weather</h2>
        <button type="button" onClick={this.changeWeather}>Yosemite</button>
        <div style={{ backgroundColor: '#aaaaaa' }}>
          Todays Forecast
          <p stlye={{}}>
            Current temperature is
            &nbsp;
            {Math.round(currently.temperature)}
            &deg;F
            &nbsp;
            Feels like
            &nbsp;
            {Math.round(currently.apparentTemperature)}
            &deg;F
            &nbsp;
            High
            &nbsp;
            {Math.round(daily.data[0].temperatureHigh)}
            &deg;F
            &nbsp;
            Low
            &nbsp;
            {Math.round(daily.data[0].temperatureLow)}
            &deg;F
          </p>
          <p>
            Sun Rise
            &nbsp;
            {this.sunRise()}
            &nbsp;
            Sun Set
            &nbsp;
            {this.sunSet()}
            &nbsp;
          </p>
          <p>
            Humidity
            &nbsp;
            {daily.data[0].humidity}
            &nbsp;
            Today is
            &nbsp;
            {currently.summary}
            &nbsp;
            with Wind speed of
            &nbsp;
            {daily.data[0].windSpeed}
            &nbsp;
            mph
            &nbsp;
            UV index
            &nbsp;
            {daily.data[0].uvIndex}
          </p>
        </div>
        <br />
        <div>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <ForecastForm
                  forecasts={daily.data}
                  sunRise={this.sunRise}
                  sunSet={this.sunSet}
                />
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Weather;
