"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminUserMW = exports.isAuthorizedUserMW = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = __importDefault(require("../models/users.model"));
const enviromment_varibals_1 = require("../utils/enviromment-varibals");
const isAuthorizedUserMW = async (req, res, next) => {
    const token = req.headers.authorization || req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const jwtString = token.startsWith('Bearer') ? token.replace('Bearer ', '') : token;
    try {
        const decoded = jsonwebtoken_1.default.verify(jwtString, enviromment_varibals_1.SECRET);
        req.userId = decoded === null || decoded === void 0 ? void 0 : decoded.id;
        req.user = await users_model_1.default.findById(req.userId);
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.isAuthorizedUserMW = isAuthorizedUserMW;
const isAdminUserMW = (req, res, next) => {
    // @ts-ignore
    if (req.user.role !== 'admin') {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    next();
};
exports.isAdminUserMW = isAdminUserMW;
//# sourceMappingURL=auth.middleware.js.map