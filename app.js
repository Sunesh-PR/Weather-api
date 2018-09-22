var yargs = require('yargs');
var geocode = require('./geocode/geocode');
var request = require('request');
var weather = require('./weather/weather');


var argv = yargs
  .options({
    a:{
      alias: 'address',
      demand: true,
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.gecodeAdress(argv.address,(errorMessage,results)=>{
  if(errorMessage){

    console.log(errorMessage);
  }else{
    console.log("---");
    console.log(`Address: ${results.address}`);
    console.log("---");
    weather.getWeather(results, (errorMessageW,results) => {
      if(errorMessageW){

        console.log(errorMessageW);
      }else{
        let temp1 = (results.temperature-32)/1.8;
        let temp2 = (results.apparentTemperature-32)/1.8;
        console.log(`It's currently ${temp1.toFixed(2)}°C, but feels like ${temp2.toFixed(2)}°C `);
      }

    });
  }
});
