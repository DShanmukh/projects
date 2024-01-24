import mongoose from "mongoose";
const Schema = mongoose.Schema;
let valid= new Schema({
  name:{
    type: String,
    required : true
  },
  sname:{
    type: String,
    required : true
  },
  email:{
    type: String,
    required : true
  },
  password:{
    type: String,
    required : true
  },
})
export default mongoose.model("valid", valid)