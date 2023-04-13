const mongoose  = require('mongoose');

const connection = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/patrika');
        console.log('connected to db');
    } catch (error) {
        console.log('error: mongodb connection failed');
        throw new Error(err.message);        
    }
}

module.exports = {
    connection
}