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
    },

    cloudinaryConfig: {
        name: process.env.CLOUDINARY_CLOUD_NAME,
        key: process.env.CLOUDINARY_API_KEY,
        secret: process.env.CLOUDINARY_SECRET
    }
};

export default config;