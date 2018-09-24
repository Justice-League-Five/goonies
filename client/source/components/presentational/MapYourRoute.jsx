import React from 'react';
import GoogleMapsContainer from './renderMap';


const MapYourRoute = (props) => {
  console.log('myr -data', props.data);
  const text = props.data;
  const trails = text.map((trail) => {
    return (
      <ul key={trail.key} id="trailCard">
          <li className="trailDetails" style={{color: "#009933"}}>{trail.name}</li>
          <li className="trailDetails">Difficulty Level: {trail.difficulty}</li>
          <li className="trailDetails">Length: {trail.length} miles</li>
          <li className="trailDetails">Star Rating: {trail.stars}</li>
      </ul>
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
        <GoogleMapsContainer data={props.data}/>
      </div>
    </div>
  );
};


export default MapYourRoute;
