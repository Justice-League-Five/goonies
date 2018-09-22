// require('dotenv').config();
const axios = require('axios');
const key = require('../trailskey.js');

const apiKey = key.key;


function getTrailsData(lat, lon) {
  axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=-${lon}&maxDistance=30&key=${apiKey}`)
    .then((response) => {
      console.log('Success in obtaining data from Trails API', response.data);
    })
    .catch((error) => {
      console.log('Error - data was not received from Trals Api', error);
    });
}

module.exports.getTrailsData = getTrailsData;
