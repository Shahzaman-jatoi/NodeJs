const express = require('express');
const app = express();
const dbConnect = require('./dbConnection');
const mongodb = require('mongodb');

app.use(express.json());
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.find().toArray();
    res.send(result);
});
app.post('/', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    console.log(result);

});
app.put('/:name', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body});
    res.send('Updated');
    console.log('updated');
    
});
app.delete('/:id', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.deleteMany({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
})
app.listen(8080);