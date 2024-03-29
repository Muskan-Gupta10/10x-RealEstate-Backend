const express = require("express");
let cors = require("cors");
const dotenv = require("dotenv");
let bodyParser = require("body-parser");
const app = express()
const mongoose = require("mongoose")
const port = 8081;
let postDetails = require("./src/Routes/postDetails.js");
let addProperty = require("./src/Routes/AddProperty.js");
const signupLoginRoute = require("./src/Routes/signupLoginRoute.js");

dotenv.config()
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://muskan:7BSLWjbjmplwuYFw@cluster0.s0y4mye.mongodb.net/RealEstateDB?retryWrites=true&w=majority")
.then((res) => {
    console.log("Connected to MongoDb Server");
}).catch((err) => {
    console.log("Connection failed");
})

app.use("/postDetails", postDetails);
app.use("/addProperty", addProperty);
app.use("/signupLoginRoute", signupLoginRoute);

app.use((req, res) => {
    console.log(req.path);
    res.send("You have not requested for any path so I am showing you the default send");
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})