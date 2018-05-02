/**
 * Created by smanohar on 5/2/18.
 */
const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

const apiKey = 'c89b43c3e04216190b5ec9260bc781ba';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index', {weather: null, error:null});
    //res.send('Hello World!')
});

app.post('/', function(req,res){
    var city = req.body.city;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    request(url, function(err, response, body){
            if(err){
                res.render('index', {weather: null, error: 'Error, pls try again'});
                return;
                //console.log('error:', error);
            }else{
                var weather = JSON.parse(body);
                console.log('body:', body);
                if(weather.main == undefined){
                    res.render('index', {weather: null, error: 'Error, pls try again'});
                    return;
                }else{
                    var weatherText =  `It's ${weather.main.temp} degrees in ${weather.name}!`;
                    res.render('index', {weather: weatherText, error: null});
                }
            }
        });
    console.log(req.body.city);
});


app.listen(3000, function(){
    console.log('Example app listening on port 3000')
});



