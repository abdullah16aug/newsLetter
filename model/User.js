import mongoose from "mongoose";
const {Schema} = mongoose
const userSchema=new Schema({
    email:{type:String,required:true,unique:true},
})

const User=mongoose.model('user',userSchema)
export default User