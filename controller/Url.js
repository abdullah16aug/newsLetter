import { nanoid } from "nanoid"
import {URL} from '../model/Url.js'
const GenShortUrl=async(req,res)=>{
const url=req.body.url
if(!url)return res.status(400).json({error:error.message})
const shortId=nanoid(7)
await URL.create({
    shortId:shortId,
    redirectURL:url,
    visitHistory:[]
})
return res.json({id:shortId})
}
export default GenShortUrl