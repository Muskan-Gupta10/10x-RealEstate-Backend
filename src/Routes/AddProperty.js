let express = require("express");
let PropertyModel= require("../Schema/EverythingInOneSchema")
let router=express.Router();

router.post("/addProperty",async(req,res)=>{
    try {
        const Property = new PropertyModel(req.body);
        const addProperty = await Property.save();
        res.status(201).send(addProperty);
      } catch (e) {
        res.status(400).send("Error in catch");
        console.log(e);
      }
})