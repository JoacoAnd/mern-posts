// DOTENV
import dotenv from 'dotenv';
dotenv.config();

const config = {
    appConfig: {
        port: process.env.PORT || 4000
    },

    dbConfig: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASS,  
    }
};

export default config;