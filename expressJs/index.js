const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send("Welcome to our home page");
});
app.get('/about', (req, res)=>{
    res.send("Welcome tp about us page");
});
app.get('/detail', (req, res)=>{
    res.send("Welcome to detail " + req.query.name);
});
app.get('/render', (req, res)=>{
    //rendering html tags here 
    res.send(`
    <h1> I am rendering html tags here</h1>
    <h2> I am rendering h2 tag here</h2>
    `);
})
app.get('/renderJson', (req, res)=>{
    res.send(
    [
        {
            name: 'Shahzaman',
            email: 'Shahzamaanjatoi42@gmail.com',
            contact: 03142,
        },

        {
            name: 'Shahzaman',
            email: 'Shahzamaanjatoi42@gmail.com',
            contact: 0317040,
        }

    ]
    );
});
app.get('/renderLink', (req, res)=>{
    res.send(`
    <a href="https://www.facebook.com/"><h3>Click here to go to Facebook</h3></a>
    `);
});
app.get('/argumentValue', (req, res)=>{
    res.send(`
    <input type = 'text' value = '${req.query.name}' placeholder= 'user name'/>
    <button> <a href='/submit'>Submit</a> </button>
    `);
});
app.get('/submit', (req,res)=>{
    res.send(`
    <h1> Your request has been submitted through submit button<h1>
    `);
})
app.listen(8080);
