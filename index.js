const express=require("express")
 const app=express();
 const cors=require("cors")
 const bodyParser=require("body-parser");
 const { default: mongoose }= require("mongoose");
 

 app.use(bodyParser.urlencoded({
    extended:true
    })) 
    app.use(bodyParser.json())

    app.use(cors())

    mongoose.connect("mongodb+srv://regumuditeja:regumuditeja@cluster0.pt5iacj.mongodb.net/firstdb?retryWrites=true&w=majority")
      .then(()=>{
        console.log("Mongodb connected successfully")
      })
      .catch((err)=>{
        console.log(err)
      })

    app.get("/",(req,res)=>{
        res.send("API is working")
    })

    app.get("/users",async(req,res)=>{
        await Content.find()
        .then(found=>console.log(found))

    })
    app.post("/store",(req,res)=>{
        const {username="tejaregumudi@gmail.com",password=tejaregumudi}=req.body
        const newData=new Content({
            username,password
        })
        newData.save()
    })

    app.listen(3000,()=>console.log("server is running on port,port"))