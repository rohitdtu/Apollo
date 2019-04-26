const mongoose = require('mongoose');
var DetailSchema = new mongoose.Schema({
    officename: String,
    pincode: String,
    officeType: String,
    Deliverystatus: String,
    divisionname: String,
    regionname: String,
    circlename: String,
    Taluk: String,
    Districtname: String,
    statename: String,
    Telephone: String,
    "Related Suboffice": String,
    "Related Headoffice": String,
    longitude: String,
    latitude: String
})

var Location = mongoose.model('detail', DetailSchema);

module.exports = {Location};