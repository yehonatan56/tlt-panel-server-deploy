"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WHATSAPP_GROUP_ID = exports.SECRET = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.NODE_ENV = exports.CONNECTION_STRING = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const paths_1 = require("../paths");
dotenv_1.default.config({ path: paths_1.ENV_PATH });
const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/test';
exports.CONNECTION_STRING = CONNECTION_STRING;
const NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
exports.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
exports.CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET;
const SECRET = process.env.SECRET || 'secret';
exports.SECRET = SECRET;
const WHATSAPP_GROUP_ID = process.env.WHATSAPP_GROUP_ID;
exports.WHATSAPP_GROUP_ID = WHATSAPP_GROUP_ID;
//# sourceMappingURL=enviromment-varibals.js.map