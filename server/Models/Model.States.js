const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
      Name : {type: String, required: true},
      StateCode : {type: String, required: true},
      Tin:{type:Number, required: true},
      Email : {type:String, required: true},
      Password : {type:String, required: true},
      VerificationPin :{type:Number, required: true},
      Status : {type :String, required: true , enum : ['Pending', 'Added']},
      Role : {type: String, default : 'STATE'},
},{versionKey: false, timestamps: true});


const StateModel = mongoose.model('State', StateSchema);
module.exports = StateModel;