const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res)=>{
    const unit = 'metric';
    const query = req.body.cityName;
    const apiKey = `d655dd861adfb627d7c9552304030376`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

    https.get(url, (resp)=>{
        resp.on('data', (data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

            res.write(`<h1> Current Weather in ${query} is ${temp} it looks a bit ${description} </h1>`);
            res.write(`<img src="${imgUrl}" width="500px">`);
            res.send();
        });
    });
});
app.listen(5000);