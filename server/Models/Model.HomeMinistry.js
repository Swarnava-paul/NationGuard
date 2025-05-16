const mongoose = require('mongoose');

const HomeMinistrySchema = new mongoose.Schema({
    Email : {type: String, required: true},    
    Password : {type: String, required: true},
    LastLoggedIn : {type : Date},
    LastLoggedInLocation :{type: String},
    Role : {type: String, default : 'HOME-MINISTRY'},
},{versionKey: false, timestamps: true});

const HomeMinistryModel = mongoose.model('Hm', HomeMinistrySchema);

module.exports = HomeMinistryModel;
// This model represents the Home Ministry user in the database.