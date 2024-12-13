"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMW = void 0;
const multer_1 = __importDefault(require("multer"));
const paths_1 = require("../paths");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, paths_1.PUBLIC_PATH + "/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const uploadMW = (0, multer_1.default)({ storage });
exports.uploadMW = uploadMW;
//# sourceMappingURL=upload.miiddleware.js.map