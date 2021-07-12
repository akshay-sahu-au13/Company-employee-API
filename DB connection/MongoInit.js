require('dotenv').config();
const mongooose = require('mongoose');
const MongoUri = process.env.MONGOURI;

const MongoInit = async() => {
    try {
        await mongooose.connect(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log("Error while connecting to DB : ", error.message);
    }
}

module.exports = MongoInit;