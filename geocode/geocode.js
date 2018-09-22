var request = require('request');

var geocodeAddress = (address,callback) => {


  var encodedAddress = encodeURIComponent(address);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },(error, response, body)=> {
    if(error){
      callback("Unable to connect to Google service...");
    }
    else if(body.status=== "ZERO_RESULTS"){
      callback("Cannot find this particular address");
    }else if(body.status=== "OK"){
      callback(undefined,{
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng

      });
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }

});
}
module.exports.gecodeAdress = geocodeAddress;
