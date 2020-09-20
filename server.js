require('dotenv').config();



const express = require('express');
const bodyParser = require('body-parser'); // for POST request
const app = express();

// grant access to 'public' directory
app.use(express.static('public'));

// set view via ejs
app.set('view engine', 'ejs');

// for POST request
app.use(bodyParser.urlencoded({ extended: true }));

// Get weather API by zipcode; return values
const request = require('request');
const apiKey = process.env.KEY;

app.post('/', function (req, res) {
    let zip = req.body.zip;


    let  units = req.body.unit; 
    
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${units}&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if(err){
        res.render('index', {data: null, error: 'Error, please try again'});
        } else {
        let data = JSON.parse(body);
        
        if(data.main == undefined){
            res.render('index', {data: null, error: 'Error, please try again'});
        } else {
            //let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            res.render('index', {city: data.name, error: null, temp: Math.round(data.main.temp), feels: data.weather[0].description, shift: data.timezone, 
            units: units});
        }
        }
    });
})

// default view is index.ejs
app.get('/', function (req, res) {
    res.render('index', {city: null, error: null, temp: null, feels: null, shift: null, units: null});
})

// replace process.env.PORT (for Heroku)with 3000 for local deployment
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
  // cli $ killall -9 node if issue