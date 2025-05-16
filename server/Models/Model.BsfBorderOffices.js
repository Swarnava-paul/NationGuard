const mongoose = require('mongoose');

const BsfBorderOfficesSchema = new mongoose.Schema({
      Name : {type: String, required: true},
      State: {type: String, required: true},
      StateTin:{type:Number, required: true},
      Email : {type:String, required: true},
      Password : {type:String, required: true},
      VerificationPin :{type:Number, required: true},
      Status : {type :String, enum : ['Pending', 'Added']},
      IcpCode : {type: String, required: true},
      Role : {type: String, default : 'BSF-BORDER-OFFICE'},
},{versionKey: false, timestamps: true});

const BsfBorderOfficeModel = mongoose.model('Bsfborderoffice', BsfBorderOfficesSchema);
module.exports = BsfBorderOfficeModel;