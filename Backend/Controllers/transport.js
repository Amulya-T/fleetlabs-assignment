const transport = require('../Models/transport.json')

exports.getTransport=(req,res)=>{
    res.setHeader('Content-Type','appliction/json');
    res.json({message:"transport details Fetched Successfully",transport:transport}); 
}