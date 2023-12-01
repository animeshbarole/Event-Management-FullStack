const express = require('express');
const User = require('../models/user.models');
const router = express.Router();

const jwt = require('jsonwebtoken');
const JWT_SECRET="AnimeshSecretWebTocken";

router.post('/', async (req, res) => {

    

     const user  = await User.findOne({
        email: req.body.email ,
        password:req.body.password,
     });
     
     
     if(user)
     {
      
         const token = jwt.sign({
            
            name :user.name,
             email:user.email,
          
         },JWT_SECRET);   
         
        
         
            return res.json({
                status:'ok',
                user:token,
               
            });
     }
     else 
     {
        return res.json({
            status :'User not Found',
            user :false
        })
     }
    
  
    
  });
module.exports =router;
