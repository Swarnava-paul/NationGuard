const mongoose = require('mongoose');

const ImmigrantsSchema = new mongoose.Schema({

    NameOnVisa :{ type : String, required: true},
    VisaNumber :{ type : String, required: true},
    FaceEmbedding:{ type : [Number], required: true},
    ProfilePic : { type : String, required: true},
    OriginCountry :{ type : String, required: true},
    ReasonOfCome : { type : String, required: true},
    LastSeenLocations : { type : [String], required: true},
    EnteredByBorderName :{ type : String, required: true},
    EntryByBsfOfficerId :{ type : mongoose.Schema.Types.ObjectId, required: true , ref : 'Bsf-officer'},
    EnteredByState : {type : String, required: true},
    EnteredTime : { type : Date , default : ()=> Date.now()}, 
},{versionKey: false});

const ImmigrantsModel = mongoose.model('Immigrant',ImmigrantsSchema);
module.exports = ImmigrantsModel;