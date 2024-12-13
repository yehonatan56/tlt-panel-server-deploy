"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const enviromment_varibals_1 = require("./enviromment-varibals");
cloudinary_1.v2.config({
    cloud_name: enviromment_varibals_1.CLOUDINARY_CLOUD_NAME,
    api_key: enviromment_varibals_1.CLOUDINARY_API_KEY,
    api_secret: enviromment_varibals_1.CLOUDINARY_API_SECRET,
});
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
//# sourceMappingURL=cloudinary.js.map