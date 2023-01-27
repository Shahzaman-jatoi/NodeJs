const dbConnect = require('./dbConnection');
const readData = async()=>{
    let data = await dbConnect();
    data = await data.find({brand:'Apple'}).toArray();
    console.log(data);
}
readData();