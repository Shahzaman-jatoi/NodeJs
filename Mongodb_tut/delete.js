const dbConnect = require('./dbConnection');

const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({brand:'Apple'});
    if(result.acknowledged){
        console.warn('Items Deleted');
    }
}

deleteData();
