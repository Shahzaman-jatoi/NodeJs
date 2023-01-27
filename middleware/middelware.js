module.exports= reqFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send('Please Provide age');
    }
    else if(req.query.age < 18){
        res.send('You are under age');
    }
    else{
        next();
    }
}

