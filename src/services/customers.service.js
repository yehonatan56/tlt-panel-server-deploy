"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomerServiceHandler = void 0;
const customers_model_1 = __importDefault(require("../models/customers.model"));
const addCustomerServiceHandler = async (customer) => {
    try {
        const customerDoc = new customers_model_1.default(customer);
        await customerDoc.save();
        return customerDoc._id;
    }
    catch (err) {
        return err;
    }
};
exports.addCustomerServiceHandler = addCustomerServiceHandler;
//# sourceMappingURL=customers.service.js.map