import React from 'react';
import GoogleMapsContainer from './renderMap';
import { getTrailsData } from '../../../../server/trailsApi';


class MapYourRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.getTrailsLocation = this.getTrailsLocation.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
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
    } else if (location === 'Yellowstone') {
      const lat = 44.4280;
      const lon = 110.5885;
      getTrailsData(lat, lon);
    }
  }

  selectLocation(e) {
    this.setState({
      location: e,
    });
    this.getTrailsLocation();
  }

  render() {
    return (
      <div>
        <div className="buttonContainer">
          <button onClick={() => { this.selectLocation('Yosemite'); }} type="button" name="Yosemite" id="Yosemite">Yosemite</button>
          <button onClick={() => { this.selectLocation('Yellowstone'); }} type="button" name="Yellowstone" id="Yellowstone">YellowStone</button>
        </div>
        <br />
        <br />
        <div>
          <GoogleMapsContainer />
        </div>
      </div>
    );
  }
}


export default MapYourRoute;
