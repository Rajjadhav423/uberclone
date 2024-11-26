const express=require('express')
const app=express()
const cors=require('cors')
const {connectDB}=require('./config/db')
const router=require('./routes/user-routes')

app.use(cors())


app.use(router)
connectDB()

app.get('/',(req,res)=>{
    res.send('heii')
})


module.exports=app