require('dotenv').config();

const express = require('express');
const server = express();
const {connectWithDb} = require('./Config/connection.db');
const fs = require('node:fs');
const path = require('node:path');
const {logRegister} = require('./Modules/log-register.js');

server.use(express.json());

server.get('/test-server',async(req,res)=>{
    try {
        res.status(200).json({
            message: "Server is running"
        });
    }catch(e) {
        console.error(e);
        res.status(500).json({message: "Server is not running"});
    }
}); // server test route



server.listen(process.env.PORT || 7000, async() => {
    try {
        await connectWithDb();
        console.log(`Server is running on port ${process.env.PORT}`);
    }catch(error) {
        const errorRecord = `\n ${new Date().toISOString()} - Server Crashed : ${error.message}\n`;
        await logRegister(errorRecord);
        console.error("Error in connection with database", error);
        process.exit(1);
    }
});