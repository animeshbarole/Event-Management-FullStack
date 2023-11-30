const express = require('express');
const registerRoutes = require('./registration-routes');
const loginRoutes =require('./login-routes');
const router  = express.Router();


router.use('/register',registerRoutes);
router.use('/login',loginRoutes);


module.exports = router;