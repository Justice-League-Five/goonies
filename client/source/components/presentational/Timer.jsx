import React from 'react';
import Moment from 'moment';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      savePoints: [],
      distanceInMiles: 0,
      trailDistance: 0,

    };
    this.day = Moment(new Date).format('dddd,');
    this.time = Moment(new Date).format('h:mm a');
    this.timestamp = new Date;
    this.start;
    this.coords;
    this.displayLat = 'Latitude: 37.8651';
    this.displayLong = 'Longitude: -119.5383';
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.saveTimer = this.saveTimer.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.getCoords = this.getCoords.bind(this);
  }

  componentDidMount() {
    window.scroll(top);
    this.coords = this.getCoords();
    window.scroll(top);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getCoords() {
    const context = this;
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function success(pos) {
      context.coords = pos.coords;
      return pos.coords;
    }
    function error(err) {
      return '';
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  startTimer() {
    this.start = this.timestamp;
  }

  stopTimer() {
    clearInterval(this.time);
  }

  coordsReady() {
    return !!this.coords;
  }

  saveTimer() {
    const { savePoints, elapsedTime } = this.state;
    this.setState({
      savePoints: savePoints.concat([elapsedTime]),
    });
  }

  handleSave(e) {
    e.preventDefault();
    const { distanceInMiles } = this.state;
    this.setState({ distanceInMiles });
  }

  render() {

    const Button = props => (<button type="button" {...props} />);

    const {
      elapsedTime,
      savePoints,
      distanceInMiles,
      trailDistance,
    } = this.state;

    return (
      <div className="whole-box">
        <div className="space-head"></div>
        <div className="timer-center">
          <h1 className="timer-format">
            {this.day}
          </h1>
          <h1 className="timer-format">
            {this.time}
          </h1>
          <div className="space-timestamp"></div>
          <div className="coords">{this.displayLat}</div>
          <div className="coords">{this.displayLong}</div>
          <div className="space-divide"></div>
          <div className="divide"></div>
          <div className="space-divide"></div>
          <Button className="timer-btns wide-btn start-btn" onClick={this.startTimer}>Start</Button>
          <div className="space-trail"></div>
          <div className="coords section-head">Half Dome Trail!</div>
          <div className="space-divide"></div>
          <div className="coords detail-1">22.7 km total</div>
          <div className="coords detail-1">22.7 km remaining</div>
          <div className="space-divide"></div>
          <div className="coords detail-2">3:55 to sunset</div>
          <div className="coords detail-2">4:21 to civil dusk</div>
          <div className="coords detail-2">5:23 to astronomical dusk</div>
          <div className="space-divide"></div>
          <div className="space-divide"></div>
          <div className="coords detail-3">76°</div>
          <div className="space-to-finish"></div>
          <Button className="timer-btns wide-btn finish-btn" onClick={this.stopTimer}>Finish</Button>
          <div className="space-under-finish"></div>
          <div className="divide"></div>
          <div className="space-divide"></div>
          <div className="coords section-head">Memories!</div>
        </div>
      </div>
    );
  }
}

export default Timer;