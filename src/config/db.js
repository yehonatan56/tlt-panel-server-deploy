"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../utils/logger"));
// todo: significant names - connectDB
const connectDB = async () => {
    // todo:check url connection first
    const url = process.env.CONNECTION_STRING;
    if (!url) {
        logger_1.default.error("", "No connection string provided");
        return;
    }
    await mongoose_1.default
        .connect(url)
        .then(() => {
        logger_1.default.info("", "Connected to the database");
    })
        .catch((err) => {
        logger_1.default.error("", "Failed to connect to the database", { error: err });
    });
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map