const express=require('express')
const { route } = require('../app')
const router=express.Router()


router.get('/raj',(req,res)=>{
    res.send("hello world")
})

module.exports=router