"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomerServiceHandler = exports.getCustomersServiceHandler = void 0;
const customers_model_1 = __importDefault(require("../models/customers.model"));
const getCustomersServiceHandler = async () => {
    return customers_model_1.default.find({});
};
exports.getCustomersServiceHandler = getCustomersServiceHandler;
const addCustomerServiceHandler = async (customer) => {
    const customerDoc = new customers_model_1.default(customer);
    await customerDoc.save();
    return customerDoc._id.toString();
};
exports.addCustomerServiceHandler = addCustomerServiceHandler;
//# sourceMappingURL=customers.service.js.map