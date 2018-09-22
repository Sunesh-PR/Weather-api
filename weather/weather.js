var request = require('request');

var getWeather = (results,callback) => {
  request({

    url:`https://api.darksky.net/forecast/f2b5ba7265c785737e89bdc4ae4d2133/${results.lat},${results.lng}`,
    json: true

  },(error,response,body) =>{
    if(error){
      callback("Unable to connect to server...");
    }else if(response.statusCode===400){
      callback("Cannot find the Weather..")
    }else if(!error && response.statusCode===200){
      callback(undefined, body.currently);
    }

  });
}
module.exports.getWeather = getWeather;
