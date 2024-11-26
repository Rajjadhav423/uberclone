const http=require('node:http')
const app=require('./app')

require('dotenv').config()

const server=http.createServer(app)



const PORT=process.env.PORT || 4000
server.listen(PORT,()=>{
    console.log(`the server is running at http://localhost:${PORT}`)
})