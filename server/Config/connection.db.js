const mongoose = require('mongoose');
// database connection function 
const {logRegister} = require('../Modules/log-register.js');


async function connectWithDb() {
    
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to database successfully");
    }catch(error) {
        const errorRecord = `\n ${new Date().toISOString()} - Database Connection Error: ${error.message}\n`;
        logRegister(errorRecord);
        throw error; // Rethrow the error to be handled by the caller
    }
}

module.exports = {
    connectWithDb
}