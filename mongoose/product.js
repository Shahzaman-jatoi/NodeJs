const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});
const products = mongoose.model('products', productSchema);
module.exports = products;
