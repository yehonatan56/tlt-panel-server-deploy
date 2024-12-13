"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const loginCtrl = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { message, status, token } = await (0, auth_service_1.loginServiceHandler)({
            username,
            password,
        });
        res.cookie("token", token, { httpOnly: true });
        res.status(status).json({ message, token });
    }
    catch (e) {
        next(e);
    }
};
exports.loginCtrl = loginCtrl;
//# sourceMappingURL=auth.controller.js.map