const express = require('express');
const app = express();
const reqFilter = require('./middelware');
const route = express.Router();

route.use('/', reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to home page');
});
route.get('/user', (req, res)=>{
    res.send('Welome to user section');
});
app.get('/about',(req, res)=>{
    res.send(`<h2>About page</h2>`)
});
app.get('/a',(req, res)=>{
    res.send(`<h2>About page</h2>`)
});
route.get('/ab',(req, res)=>{
    res.send(`<h2>About page</h2>`)
});
app.use('/', route);
app.listen(5050);
