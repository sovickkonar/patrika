const mongoose  = require('mongoose');
const { DB_NAME } = require('../../config');
const connection = async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        console.log(`connected to db : ${DB_NAME}`);
    } catch (error) {
        console.log('error: mongodb connection failed');
        throw new Error(err.message);        
    }
}

module.exports = {
    connection
}