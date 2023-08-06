import  express from 'express'
const app = express()

import dotenv from 'dotenv'
import { Email } from './controller/Email.js'
import {isAuthenticated} from './middlewares/Auth.js'
import userRoute from './routes/User.js'

import ConnectDB from './config/connect.js'
dotenv.config()
const port = process.env.PORT 
const url=process.env.url
//connect to db
ConnectDB(url).then(()=>console.log('database Connected'))

app.use(express.json())
app.get('/email',Email)
app.use('/auth',isAuthenticated,userRoute)
// app.use('/:url',urlRoute)
app.listen(port,()=>{
   
    console.log(`server is running on port ${port}`)
})