const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1>hello from express1999999</h1>')
  });

module.exports = router;