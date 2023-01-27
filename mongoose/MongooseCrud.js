const mongoose = require('mongoose');
const insertion = async()=>{
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({name: 'Samsung Alpha', price:29300});
    let result = await data.save();
    console.log(result);
}

const deletion = async()=>{
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const products = mongoose.model('products', productSchema);
    let data = await products.deleteOne({name:'Vivo Y9'});
    console.log(data);
}
//deleteion();
const updation = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String
    });
    const products = mongoose.model('products', productSchema);
    let data = await products.updateOne({name: 'Oppo f20'},{$set:{price:22000}});
    console.log(data);
}
//updation();
const finding = async()=>{
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const productSchema = new mongoose.Schema(
        {
            name:String,
            price:Number,
            brand:String
        }
    );
    const products = mongoose.model('products', productSchema);
    let data = await products.find();
    console.log(data);
}
finding();
updation();
insertion();
deletion();
