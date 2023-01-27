const express = require('express');
const app = express();
const Products = require('./product');
require('./config');
app.use(express.json());

// app.post('/', async (req,res)=>{
//     let data = new Products(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
// });
// app.get('/find', async(req,res)=>{
//     let data = await Products.find();
//     console.log(data);
//     res.send(data);
// });
// app.delete('/delete/:brand', async(req, res)=>{
//     let data = await Products.deleteMany(req.params);
//     res.send(data);
// });
// app.put('/update/:brand', async(req,res)=>{
//     let data = await Products.updateOne(
//         req.params,
//             {
//                 $set: req.body
//             }
//         );
//     console.log(data);
//     res.send(data);
// });

//using searchApi

// app.get('/:key', async(req,res)=>{
//     let data = await Products.find({
//         "$or":[
//             {"name": {$regex: req.params.key}},
//             {"brand": {$regex: req.params.key}}
//         ]
//     });
//     res.send(data);
//     console.log(data);
// });
app.listen(4500);