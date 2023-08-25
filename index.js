import  express from 'express'
const app = express()

import dotenv from 'dotenv'
import {isAuthenticated} from './middlewares/Auth.js'
import userRoute from './routes/User.js'
import urlRoute from './routes/Url.js'
import emailRouter from './routes/Email.js'
import ConnectDB from './config/Connect.js'
dotenv.config()
const port = process.env.PORT 
const url=process.env.url

//connect to db
ConnectDB(url).then(()=>console.log('database Connected'))

app.use(express.json())
app.use('/sendemail',emailRouter)
app.use('/auth',isAuthenticated,userRoute)
app.use('*',(req,res)=>{
    res.status(500),json({message:"No route"})
})
// app.use('/:url',urlRoute)
app.listen(port,()=>{
   
    console.log(`server is running on port ${port}`)
})