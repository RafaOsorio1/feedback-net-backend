import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    public_id: `products/${Date.now()}-${file.originalname}`,
    resource_type: "image",
    format: file.mimetype.split("/")[1],
    // transformation: [{ width: 800, height: 800, crop: "limit" }],
  }),
});

export { cloudinary, storage };
