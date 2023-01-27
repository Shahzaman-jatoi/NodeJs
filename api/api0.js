const express = require('express');
const https = require('https');
const app = express();

app.use(express.json());
app.get('/', (req, res)=>{

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=d655dd861adfb627d7c9552304030376&units=metric'

    https.get(url, (resp)=>{
        resp.on('data', (data)=>{
            const weatherr = JSON.parse(data);
            const tempreture = weatherr.main.temp;
            const weatherdescrip = weatherr.weather[0].description;
            const icon = weatherr.weather[0].icon;
            const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<h1>Tempreture right now is ${tempreture} </h1>`);
            res.write(`<p>The weather description is ${weatherdescrip} </p>`);
            res.write(`<img src="${imgUrl}" width="200px">`);
            res.send()
        })
    });
    
});

app.listen(5000);