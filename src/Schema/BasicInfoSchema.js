let mongoose = require("mongoose");

let BasicInfoSchema = mongoose.Schema({
    property_type: {type: String, required: true},
    price: {type: Number, required: true},
    property_age: {type: Number, required: true},
    property_description: {type: String, required: true},
    negotiable: {type: Boolean, required: true},
    ownership: {type: String, required: true},
    property_approved: {type: Boolean, required: true},
    bank_loan: {type: Boolean, required: true}
})

module.exports = mongoose.model("BasicInfoSchema", BasicInfoSchema);