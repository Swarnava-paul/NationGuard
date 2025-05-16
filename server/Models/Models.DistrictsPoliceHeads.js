const mongoose = require('mongoose');

const districtsPoliceHeadsSchema = new mongoose.Schema({
    Name : {type : String, required: true},
    District : {type : String, required: true},
    State : {type : String, required: true},
    Email : {type : String, required: true},
    Password: {type : String, required: true},
    VerificationPin : {type : String, required: true},
    Role : {type : String, default : 'DISTRICT-POLICE-HEAD'},
},{versionKey: false, timestamps: true});

const DistrictsPoliceHeads = mongoose.model('Districtpoliceheadoffice', districtsPoliceHeadsSchema);
module.exports = DistrictsPoliceHeads;