const express = require('express');
const User = require('../models/user.models');

const router = express.Router();

router.get('/', async (req, res) => {

      
     const user  = await User.findOne({
        email:req.body.email,
        password : req.body.password,
     });
     
     
     if(user)
     {
        return res.json({
            status :'OK',
            user:true
        })
        
     }
     else 
     {
        return res.json({
            status :'error',
            user :false,
        })
     }
    
  
    
  });
module.exports =router;
