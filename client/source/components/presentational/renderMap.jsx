import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import key from '../../../../myapikey';

const apiKey = key.key;// google Maps API Key

const GoogleMapsContainer = (props) => {
  const style = {
    width: '30vw',
    height: '60vh',
    marginLeft: 'auto',
    marginRight: 'auto',

  };
  const { google } = props;

  console.log(google);
  return (
    <div>
      <div className="map">
        <Map
          style={style}
          google={google}
          zoom={9}
          initialCenter={{ lat: 37.749669, lng: -119.555108 }}
        />
      </div>
    </div>
  );
};


GoogleMapsContainer.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
};

export default GoogleApiWrapper({ apiKey })(GoogleMapsContainer);
