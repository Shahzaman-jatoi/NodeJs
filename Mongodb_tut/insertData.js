const dbConnect = require('./dbConnection');
const insertData = async ()=>{
    let db = await dbConnect();
    let result = await db.insertMany([
        {name:'Macbook pro M1', brand:'Apple', price:'280000'},
        {name:'Zbook pro', brand:'Zb', price:'23000'}
    ]);
    if(result.acknowledged){
        console.log('Data inserted');
    }
}
insertData();
