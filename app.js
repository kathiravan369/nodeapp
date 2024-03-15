const express = require ('express')
const mongoose = require('mongoose');
const cors = require("cors")
const app = express()
const  collection = require("./models/Login")
const  UserModel = require("./models/Notes")

app.use(express.urlencoded({extended: true}))
app.use (express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/notes-data?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})




app.post("/",async(req,res)=>{
    const{email,password}=req.body
  
  try{
  
    const check = await collection.findOne({email:email})
    if(check){
        res.json("exist")
    }
    else{
        res.json("notexist")
        
    }
  
  
  }catch(e){
  
    res.json("notexist")
  
  
  }
  
  })
  
  
  app.post("/signup",async(req,res)=>{
      const{name,email,password}=req.body
  
      const data = {
          name:name,
          email:email,
          password:password
      }
  
    try{
  
      const check = await collection.findOne({email:email})
      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
          await collection.insertMany([data])
      }
  
  
    }catch(e){
  
      res.json("notexist")
  
  
    }
  
  })

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/home',(req,res)=>{
    UserModel.find({})
    .then(users =>res.json(users))
    .catch(err =>res.json(err))
})

app.get('/getUser/:id',(req,res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id}) 
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
// app.get('/getName/:id',(req,res) =>{
//     const id = req.params.id;
//     collection.findById({_id:id}) 
//     .then(collection => res.json(collection))
//     .catch(err => res.json(err))
// })

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        age:req.body.age, 
        address:req.body.address,
        phone:req.body.phone,
        blood:req.body.blood
        })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res) =>{
    const id  = req.params. id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

// app.put("/createUser",(req,res)=>{
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })




app.listen(8000,'127.0.0.1',()=>{
    console.log("listen to port 8000")

})
