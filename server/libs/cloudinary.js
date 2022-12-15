import { v2 as cloudinary } from 'cloudinary';
import config from '../config.js';

cloudinary.config({
    cloud_name: config.cloudinaryConfig.name,
    api_key: config.cloudinaryConfig.key,
    api_secret: config.cloudinaryConfig.secret
});

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "posts"
    });
};

export const deleteImage = async id => {
    await cloudinary.uploader.destroy(id);
};