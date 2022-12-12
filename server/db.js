import mongoose from "mongoose";
import config from "./config.js";

async function connectDB () {
    try {
        await mongoose.connect(`mongodb+srv://${config.dbConfig.username}:${config.dbConfig.password}@cluster0.gi11nkf.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);        
    }
}

export default connectDB;