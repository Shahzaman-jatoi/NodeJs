// Making my first Ejs page

const express = require('express');


const app = express();
app.set('view engine', 'ejs')
app.get('/tempEngEjs', (req, res)=>{
    const user = {
        name: 'Shahzaman',
        age: 21,
        ID: 54395,
        country: 'Pakistan',
        city: 'Karachi'
    };
    res.render('tempEngEjs', {user});
});
app.get('/profile',(req, res)=>{
    const profile ={
        job: 'Full Stack developer',
        level: 'Senior',
        salary: '320,000$/year'
    }
    res.render('profile', {profile});
});
app.listen(7070);

