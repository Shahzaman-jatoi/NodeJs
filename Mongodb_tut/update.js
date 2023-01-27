const dbConnect = require('./dbConnection');
const updateData = async()=>{
    let db = await dbConnect();
    let result = await db.updateMany(
        {name:'Zbook pro'}, {
             $set: {price:'43200'}
        }
    )
    console.warn(result);
}
updateData();