"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const logger_1 = __importDefault(require("../utils/logger"));
const loginCtrl = async (req, res, next) => {
    var _a;
    try {
        const { username, password } = req.body;
        const { message, status, token } = await (0, auth_service_1.loginServiceHandler)({ username, password });
        logger_1.default.info(req.id, 'login successfully, generated token');
        res.cookie('token', token, { httpOnly: true });
        res.status(status).json({ message, token });
    }
    catch (e) {
        res.status(401).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.loginCtrl = loginCtrl;
//# sourceMappingURL=auth.controller.js.map