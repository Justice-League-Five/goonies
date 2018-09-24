import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';
import key from '../../../../myapikey';

const apiKey = key.key;// google Maps API Key

const GoogleMapsContainer = (props) => {
  // console.log('map', props.data);


  // const marker = props.data.map((marker) => {
  //   return (
  //     <Marker
  //       title={marker.name}
  //       zoom={9}
  //       position={{ lat:{marker.latitude}, lng:{marker.longitude} }}
  //       name={marker.name}
  //       />
  //   )
  //   });
  const style = {
    width: '25vw',
    height: '60vh',
    marginLeft: 'auto',
    marginRight: 'auto',

  };
  const { google } = props;
  return (
    <div>
      <div className="map">
        <Map
          style={style}
          google={google}
          zoom={9}
          initialCenter={{ lat: 44.4280, lng: -110.5885 }}
        >
          <Marker
            title="Yellowstone National Park"
            zoom={9}
            position={{ lat: 44.4280, lng: -110.5885 }}
          />
          <Marker
            title="Yosemite National Park"
            zoom={9}
            position={{ lat: 37.8651, lng: -119.5383 }}
          />
        </Map>
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
