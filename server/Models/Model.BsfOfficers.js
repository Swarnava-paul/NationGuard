const mongoose = require('mongoose');


const BsfOfficerSchema = new mongoose.Schema({
      
      Name : {type: String, required: true},
      UserId : {type: String, required: true},
      Password : {type:String, required: true},
      ServingBorderOfficeName : {type: String, required: true},
      ServingBorderOfficeId : {type: mongoose.Schema.Types.ObjectId,
      required: true , ref : "Bsf-border-office"},
      FaceEmbedding : {type : [Number] , required : true},
      ProfileImage : {type : String , required : true},
      Rank : {type: String, required: true},
      BtnNumber : {type: String, required: true},
      IdentityCardNumber : {type: String, required: true},
      Role : {type: String, default : 'BSF-OFFICER'},

},{versionKey: false, timestamps: true});

const BsfOfficerModel = mongoose.model('Bsf-officer', BsfOfficerSchema);
module.exports = BsfOfficerModel;