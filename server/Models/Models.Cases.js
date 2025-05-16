const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    ImmigrantName : {type : String, required: true},
    VisaNumber : {type : String, required: true},
    CaseStatus : {type : String, required: true, enum:['Pending','Resolved']},
    ForwardedToState : {type : String, required: true },
    EntryId : {type : mongoose.Schema.Types.ObjectId, required: true , ref : 'Immigrant'},
    ForwardedToDPH : {type : String, required: true },
    VisaExpiredPeriod : {type : String, required: true},
    Suspect : {type : String , default : null , enum : [null,'Terror','Sleeper cell']}
},{versionKey: false});

const Cases = mongoose.model('Case', caseSchema);
module.exports = Cases;