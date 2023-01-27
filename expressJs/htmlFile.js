/*
Making html files folder and displaying it on web using 
app.use function along with express.static() functions to display static web pages 
it will only display html files here css files will displayed in next code 
*/

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, "public");

//app.use(express.static(publicPath));

app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/contact', (req, res)=>{
    res.sendFile(`${publicPath}/contact.html`);
});
app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(5050);