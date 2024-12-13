"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerServiceHandler = exports.getUsernamesServiceHandler = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const getUsernamesServiceHandler = async () => {
    const users = await users_model_1.default.find({}, "username");
    return users;
};
exports.getUsernamesServiceHandler = getUsernamesServiceHandler;
const registerServiceHandler = async (body) => {
    const { username, password, role } = body;
    try {
        const user = new users_model_1.default({ username, password, role });
        await user.save();
        return user;
    }
    catch (err) {
        return { message: err.message, status: 400 };
    }
};
exports.registerServiceHandler = registerServiceHandler;
//# sourceMappingURL=users.service.js.map