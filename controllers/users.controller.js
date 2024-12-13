"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCtrl = exports.getUsernamesCtrl = void 0;
const users_service_1 = require("../services/users.service");
const getUsernamesCtrl = async (_req, res, next) => {
    var _a;
    try {
        const users = await (0, users_service_1.getUsernamesServiceHandler)();
        res.send(users);
    }
    catch (e) {
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.getUsernamesCtrl = getUsernamesCtrl;
const registerCtrl = async (req, res, next) => {
    var _a;
    try {
        const users = await (0, users_service_1.registerServiceHandler)(req.body);
        res.send(users);
    }
    catch (e) {
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.registerCtrl = registerCtrl;
//# sourceMappingURL=users.controller.js.map