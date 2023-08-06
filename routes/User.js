import Express  from "express";
const route=Express.Router()
import {logInUser, signUpUser} from '../controller/User.js'


route.post('/signup',signUpUser).post('/login',logInUser)

export default route