import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRATE
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file on cloudinary
        const respose = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file is uploaded on cloudinary", (await respose).url)
        return respose;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the localy saved temp file as the upload operation got failed.
        return null;
    }
}

export { uploadOnCloudinary }