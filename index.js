const request = require('request');
const argv = require('yargs').argv;

var apiKey = 'c89b43c3e04216190b5ec9260bc781ba';       //'84907933c453088e79c370e5750780bb';

var city = argv.c || 'Lehi';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function(err, response, body){
    if(err){
        console.log('error:', error);
    }else{
        console.log('body:', body);
    }

    var weather_json = JSON.parse(body);

    var msg = `It's ${weather_json.main.temp} degrees in ${weather_json.name}!`
    console.log(msg);
});








