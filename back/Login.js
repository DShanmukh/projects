import mongoose from "mongoose";
const Schema=mongoose.Schema;
let user = new Schema({
  email:{
    type: String,
    required: true
  },
  password:{
    type : String,
    required : true
  }
})
export default mongoose.model("user",user)