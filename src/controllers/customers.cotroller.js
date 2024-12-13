"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomerCtrl = void 0;
const customers_service_1 = require("../services/customers.service");
const addCustomerCtrl = async (req, res, next) => {
    try {
        const id = await (0, customers_service_1.addCustomerServiceHandler)(req.body);
        req.customerID = id;
        next();
    }
    catch (e) {
        res.json(e);
    }
};
exports.addCustomerCtrl = addCustomerCtrl;
//# sourceMappingURL=customers.cotroller.js.map