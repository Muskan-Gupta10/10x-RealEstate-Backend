let mongoose = require("mongoose");

let PropertyDetailsSchema = mongoose.Schema({
    price: {type: Number, required: true},
    length: {type: Number, required: true},
    total_area: {type: Number, required: true},
    no_of_bhk: {type: Number, required: true},
    attached: {type: Boolean, required: true},
    furnished: {type: Boolean, required: true},
    lift: {type: Boolean, required: true},
    facing: {type: String, required: true},
    area_unit: {type: String, required: true},
    no_of_floor: {type: Number, required: true},
    western_toilet: {type: Boolean, required: true},
    car_parking: {type: Boolean, required: true},
    electricity: {type: String, required: true}
})

module.exports = mongoose.model("PropertyDetailsSchema", PropertyDetailsSchema);