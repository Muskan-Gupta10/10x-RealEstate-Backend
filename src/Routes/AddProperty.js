let express = require("express");
let mongoose = require("mongoose");
let EverythingInOneSchema = require("../Schema/EverythingInOneSchema");
let router = express.Router();

let PropertyModel = mongoose.model("EverythingInOneSchema");

router.post("/addProperty", async (req, res) => {
  console.log(req.body);
  let data = req.body;
  try {
    await PropertyModel.create({
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
      bank_loan: data.bank_loan,
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.json({
      messege: err
    });
  }
  // res.send("Inside Add Property");
});

module.exports = router;
