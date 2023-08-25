import express from 'express'
const router=express.Router()
import {sendEmail} from '../controller/Email.js'
router.post('/',sendEmail)
// router.get('/',getShortUrl)



export default router