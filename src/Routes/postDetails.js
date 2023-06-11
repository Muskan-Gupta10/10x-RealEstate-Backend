let express = require("express");
let mongoose = require("mongoose");
let EverythingInOneSchema = require("../Schema/EverythingInOneSchema");

let CompletePropertyDataOfUser = mongoose.model("EverythingInOneSchema")

let postDetails = express.Router();

postDetails.post("/uploadDetails", async (req, res) => {
    let data = req.body;
    try {
        await CompletePropertyDataOfUser.create({
            length: data.length,
            total_area: data.total_area,
            no_of_bhk: data.no_of_bhk,
            attached: data.attached,
            furnished: data.furnished,
            lift: data.lift,
            facing: data.facing,
            area_unit: data.area_unit,
            no_of_floor: data.no_of_floor,
            western_toilet: data.western_toilet,
            car_parking: data.car_parking,
            electricity: data.electricity,
            name: data.name,
            mobile: data.mobile,
            posted_by: data.posted_by,
            sale_type: data.sale_type,
            featured_package: data.featured_package,
            PPD_package: data.PPD_package,
            email: data.email,
            area: data.area,
            address: data.address,
            latitude: data.latitude,
            city: data.city,
            pincode: data.pincode,
            landmark: data.landmark,
            longitude: data.longitude,
            property_type: data.property_type,
            price: data.price,
            property_age: data.property_age,
            property_description: data.property_description,
            negotiable: data.negotiable,
            ownership: data.ownership,
            property_approved: data.property_approved,
            bank_loan: data.bank_loan
        })
        res.header("Access-Control-Allow-Origin", "*");
        res.send("Data added to Database Successfully");
    }
    catch(err) {
        console.log(err);
        res.send("Error While Sending");
    }
})

postDetails.get("/getAll", async (req, res) => {
    try {
        await CompletePropertyDataOfUser.find({}).then(data => {
            res.status(200).json({
                message: "Data fetched Successfully",
                data: data 
            })
        })
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = postDetails;
