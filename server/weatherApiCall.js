require('dotenv').config();
const axios = require('axios');
const WEATHER_API = require('../myapikey.js').weatherKey;

const getCurrentWeather = function () {
  return axios.get('https://api.darksky.net/forecast/588365177ca74f9bde7566d97755fe75/30.3555645,-81.579694')
    .then((response) => {
      response.data
    })
    .catch((error) => {
      console.log(error);
    });
};

// const getFiveDayWeather = function () {
//   return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
//     params: {
//       id: process.env.WEATHER_USER,
//       APPID: process.env.WEATHER_API,
//       lat: 37.749669,
//       lon: -119.555107,
//       units: 'imperial',
//     },
//   })
//     .then(response => response.data)
//     .catch((error) => {
//       console.log(error);
//     });
// };
module.exports.getCurrentWeather = getCurrentWeather;
// module.exports.getFiveDayWeather = getFiveDayWeather;
