const express=require("express")
const dotenv=require("dotenv")
const app=express()
const mongoose=require("mongoose")
const port=8081
dotenv.config()
app.use(express.json())
let url="mongodb+srv://Real_Estate:Real_Estate@realestatedbcluster.3uk3nl1.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGO_URI || url) 
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected successfully")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb connection failed")
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})