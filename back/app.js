import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Log from "./Login";
import data from "./Signup";
import Valid from "./Valid";
import nodemailer from "nodemailer"
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://Shanmukh:Sha9fOMnpU5fAcFm@cluster0.vmo857f.mongodb.net/Login?retryWrites=true&w=majority')
.then(()=>app.listen(8888))
.then(()=>
console.log("HII..!!!")
)
.catch((err)=>console.log(err))
app.post("/Login",(req,res,next)=>{
  console.log(req.body.formdata)
  const {email,password}=req.body.formdata
  const User = new Log({
    email,
    password
  })
  try{
    User.save()
  }
  catch(err){
    console.log(err)
  }
  return res.send({msg:"logged in",result:User})
})
app.post("/Signup",(req,res,next)=>{
  console.log(req.body.data)
  const {name,email,password}=req.body.data
  const Data =new data({
    name,email,password
  })
  try{
    Data.save()
  }
  catch(err)
  {
    console.log(err)
  }
  return res.send({msg:"Sing up Successfull",result:Data})
})
app.post('/Valid',(req,res,next)=>{
  console.log(req.body.name)
  const {name,sname,email,password}=req.body.name
  const v = new Valid({
    name,sname,email,password
  })
  try{
    v.save()
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shanmukhduvvuri@gmail.com',
    pass: 'xwab wwxa ssmj zwdw'
  }
});

var mailOptions = {
  from: 'shanmukhduvvuri@gmail.com',
  to: email,
  subject: 'Sending Email using Node.js',
  text: 'Thanks'+name+'for your  registration.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  }
  catch(err){
    console.log(err)
  }
  return res.send({msg:"completed",result:v})
})