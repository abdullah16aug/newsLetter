import express from 'express'
const router=express.Router()
import GenShortUrl from '../controller/Url.js'
router.post('/',GenShortUrl)
// router.get('/',getShortUrl)



export default router