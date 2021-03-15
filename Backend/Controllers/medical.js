const medicals = require('../Models/medical.json')

exports.getMedicals=(req,res)=>{
    res.setHeader('Content-Type','appliction/json');
    res.json({message:"Medical details Fetched Successfully",medical:medicals}); 
}