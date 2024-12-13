"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
// Cloudinary config
const cld = cloudinary_1.default.v2;
cld.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
app.use((0, cors_1.default)()); // Opened up to all origins here, but you'll want to set this :)
app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file)
        return res.sendStatus(400); // If there's no image, respond with bad request error
    try {
        // Base 64 encode the file to create a data URI for the uploader
        const base64EncodedImage = Buffer.from(req.file.buffer).toString("base64");
        const dataUri = `data:${req.file.mimetype};base64,${base64EncodedImage}`;
        // Use the cloudinary uploader to upload the image
        const response = await cld.uploader.upload(dataUri);
        // Return the public_id (or whatever else you want)
        return res.status(201).json({ publicId: response.public_id });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=test.js.map