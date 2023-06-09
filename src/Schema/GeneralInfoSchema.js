let mongoose = require("mongoose");

let GeneralInfoSchema = mongoose.Schema({
    name: {type: String, required: true},
    mobile: {type: Number, required: true},
    posted_by: {type: String, required: true},
    sale_type: {type: String, required: true},
    featured_package: {type: Number, required: true},
    PPD_package: {type: Number, required: true}
})

module.exports = mongoose.model("GeneralInfoSchema", GeneralInfoSchema);