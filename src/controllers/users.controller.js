"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCtrl = exports.getUsernamesCtrl = void 0;
const users_service_1 = require("../services/users.service");
const getUsernamesCtrl = async (req, res, next) => {
    try {
        const users = await (0, users_service_1.getUsernamesServiceHandler)();
        res.send(users);
    }
    catch (e) {
        next(e);
    }
};
exports.getUsernamesCtrl = getUsernamesCtrl;
const registerCtrl = async (req, res, next) => {
    try {
        const users = await (0, users_service_1.registerServiceHandler)(req.body);
        res.send(users);
    }
    catch (e) {
        next(e);
    }
};
exports.registerCtrl = registerCtrl;
//# sourceMappingURL=users.controller.js.map