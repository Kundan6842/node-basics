const express = require('express');
const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log('in the middleware');
    res.send('<form action="/admin/product" method = "POST"><input type = "text" name = "title"><button type = "submit"> submit </button></input></form>')
  })
  router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
  })

module.exports =router;