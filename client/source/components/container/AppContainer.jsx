import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute';
import SignUp from '../presentational/SignUp';
import Login from '../presentational/Login';
import RouteHistory from '../presentational/RouteHistory';
import routes from '../../SampleData';
import ParkInfo from '../presentational/ParkInfo';
import UserProfile from '../presentational/UserProfile';
import Timer from '../presentational/Timer';
// import ClassicTimer from '../presentational/ClassicTimer';
import Weather from '../presentational/Weather';
const axios = require('axios');
const trailsKey = require('../../../../trailskey');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingMenu: false,
      username: '',
      password: '',
      experience: '',
      yosemite: '',
      yellowstone: '',
      trailsData: {},
      location: 'Yellowstone', 

    };
    this.selectLocation = this.selectLocation.bind(this);
    this.getTrailsData = this.getTrailsData.bind(this);
    this.transferUserInfo = this.transferUserInfo.bind(this);
  }

  componentDidMount() {
        this.selectLocation();
    axios.get('/api/weather')
      .then((response) => {
        // console.log(response.data);
        this.setState({ yellowstone: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });

    axios.get('/api/weather/yosemite')
      .then((response) => {
        // console.log(response.data);
        this.setState({ yosemite: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });
  }


  getTrailsData(lat, lng) {
    const trailsApiKey = trailsKey.trailsKey;
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=-${lng}&maxDistance=30&key=${trailsApiKey}`)
      .then((response) => {
        this.setState({ trailsData: response.data.trails });
        console.log('Success in obtaining data from Trails API', response.data);
      })
      .catch((error) => {
        console.log('Error - data was not received from Trals Api', error);
      });
  }

  selectLocation(e) {
    this.setState({
      location: e,
    });
    const { location } = this.state;
    if (location === 'Yosemite') {
      const lat = 37.8651;
      const lng = 119.5383;
      this.getTrailsData(lat, lng);
    } else if (location === 'Yellowstone') {
      const lat = 44.4280;
      const lng = 110.5885;
      this.getTrailsData(lat, lng);
    }
  }
  
  handleMenuClick() {
    const { showingMenu } = this.state;
    this.setState({ showingMenu: !showingMenu });
  }

  transferUserInfo(userData) {
    this.setState({
      username: userData.username,
      password: userData.password,
      experience: userData.experience,
    });
  }

  render() {
    console.log('render', this.state.trailsData);
    const {
      showingMenu, username, password, experience, yosemite, yellowstone, trailsData
    } = this.state;
    const weather = { yosemite, yellowstone };

    return (
      <div className="header">
        <nav>
          { username
            ? <button className="menu" type="button" onClick={this.handleMenuClick.bind(this)}>MENU</button>
            : (false) }
          { showingMenu
            ? (
              <div className="dropdown">
                <div className="close">
                  <button className="close" type="button" onClick={this.handleMenuClick.bind(this)}>X</button>
                </div>
                <div role="presentation" onClick={this.handleMenuClick.bind(this)} onKeyPress={this.handleMenuClick.bind(this)}>
                  <ul className="dropdown">
                    <li><Link to="/maps" className="menu-link">Map</Link></li>
                    <li><Link to="/weather" className="menu-link">Weather</Link></li>
                    <li><Link to="/info" className="menu-link">Park Info</Link></li>
                    <li><Link to="/explorer" className="menu-link">Explorer</Link></li>
                    <li><Link to="/routes" className="menu-link">My History</Link></li>
                    <li><Link to="/user" className="menu-link">My Profile</Link></li>
                    <li><Link to="/" className="menu-link">Sign Out</Link></li>
                  </ul>
                </div>
              </div>
            )
            : (null)
          }
        </nav>
        <div className="topnav">
          <button onClick={() => { this.selectLocation('Yosemite'); }} type="button" name="Yosemite" id="Yosemite">Yosemite</button>
          <button onClick={() => { this.selectLocation('Yellowstone'); }} type="button" name="Yellowstone" id="Yellowstone">YellowStone</button>
        </div>
        <Router>
          <Login exact path="/" transferUserInfo={this.transferUserInfo} />
          <SignUp path="/signUp" transferUserInfo={this.transferUserInfo} />
          <MapYourRoute path="/maps" data={trailsData} />
          <UserProfile path="/user" userInfo={{ username, password, experience }} />
          <ParkInfo path="/info" />
          <RouteHistory path="/routes" routes={routes} username={username} />
          <Weather path="/weather" weather={weather} />
          <Timer path="/timer" />
        </Router>
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));
