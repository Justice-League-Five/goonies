import React from 'react';
import GoogleMapsContainer from './renderMap';


const MapYourRoute = (props) => {
  console.log('myr -data', props.data);
  const text = props.data;
  const trails = text.map((trail) => {
    return (
      <div key={trail.key} id="trailData">
        <h4 className="trailTitle">{trail.name}</h4>
        <div className="difficultyLevel">{trail.difficulty}</div>
        <div className="trailLength">{trail.length}</div>
        <div className="starRating">{trail.stars}</div>
      </div>
    );
  });

  return (
    <div id="mapPageContainer">
      <div className="trailsLocation">
        <ul className="list">
          {trails}
        </ul>
      </div>
      <br />
      <div className="mapdisplay">
        <GoogleMapsContainer />
      </div>
    </div>
  );
};


export default MapYourRoute;
