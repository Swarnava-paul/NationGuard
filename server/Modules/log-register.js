const path = require('path');
const fs = require('node:fs');
const logFilePath = path.resolve(__dirname, '../server-activity.log');

async function logRegister(errorRecord) {

   fs.appendFileSync(logFilePath,errorRecord, (err) => {
       if (err) {
          console.error("Error writing to log file", err);
        } else {
          console.log("Error logged to server-activity.log");
        }
    });
}

module.exports = {
    logRegister
}