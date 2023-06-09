let mongoose = require("mongoose");

let LocationInfoSchema = mongoose.Schema({
    email: {type: String, required: true},
    area: {type: String, required: true},
    address: {type: String, required: true},
    latitude: {type: Number, required: true},
    city: {type: String, required: true},
    pincode: {type: Number, required: true},
    landmark: {type: String, required: true},
    longitude: {type: Number, required: true}
})

module.exports = mongoose.model("LocationInfoSchema", LocationInfoSchema);