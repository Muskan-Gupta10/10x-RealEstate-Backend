const express=require("express")
const dotenv=require("dotenv")
const app=express()
const mongoose=require("mongoose")
const port=8081
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected successfully")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb connection failed")
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})