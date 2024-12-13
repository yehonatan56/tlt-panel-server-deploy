"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginServiceHandler = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = __importDefault(require("../models/users.model"));
const enviromment_varibals_1 = require("../utils/enviromment-varibals");
const loginServiceHandler = async ({ username, password, }) => {
    const user = await users_model_1.default.findOne({ username });
    if (!user) {
        return { message: 'User not found', status: 404, token: null };
    }
    const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordCorrect) {
        return { message: 'Invalid credentials', status: 401, token: null };
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, enviromment_varibals_1.SECRET);
    return { message: 'Logged in', status: 200, token };
};
exports.loginServiceHandler = loginServiceHandler;
//# sourceMappingURL=auth.service.js.map