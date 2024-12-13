"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomerCtrl = exports.getCustomersCtrl = void 0;
const customers_service_1 = require("../services/customers.service");
const getCustomersCtrl = async (_req, res, next) => {
    var _a;
    try {
        const customers = await (0, customers_service_1.getCustomersServiceHandler)();
        res.json(customers);
    }
    catch (e) {
        // todo: choose your response: or res.send or next(error)
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.getCustomersCtrl = getCustomersCtrl;
const addCustomerCtrl = async (req, res, next) => {
    var _a;
    try {
        const id = await (0, customers_service_1.addCustomerServiceHandler)(req.body);
        req.customerID = id;
        next();
    }
    catch (e) {
        // todo: choose your response: or res.send or next(error)
        res.status(401).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.addCustomerCtrl = addCustomerCtrl;
//# sourceMappingURL=customers.cotroller.js.map