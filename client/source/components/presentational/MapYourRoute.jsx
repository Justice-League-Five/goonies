import React from 'react';
import GoogleMapsContainer from './renderMap';
import { getTrailsData } from '../../../../server/trailsApi';


class MapYourRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Yosemite',
    };
    this.getTrailsLocation = this.getTrailsLocation.bind(this);
  }

  componentDidMount() {
    this.getTrailsLocation();
  }

  getTrailsLocation() {
    const { location } = this.state;
    if (location === 'Yosemite') {
      const lat = 37.8651;
      const lon = 119.5383;
      getTrailsData(lat, lon);
    }
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="dropdown">
           <button className="dropbtn">Pick your location</button>
           <div className="dropdown-content">
             <a id="yosemite" href="#">Yosemite</a>
             <a id="yellowstone" href="#">YellowStone</a>
           </div>
          </div>
        </div>
        <div>
          <GoogleMapsContainer />
        </div>
      </div>
    );
  }
}


export default MapYourRoute;
