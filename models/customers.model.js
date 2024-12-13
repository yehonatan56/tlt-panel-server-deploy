"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        //   unique: true,
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    purchases: {
        type: Number,
        default: 1,
    },
    pickupMethod: {
        type: String,
        required: [true, 'Pickup method is required'],
    },
    products: { type: [String], default: [] },
}, { timestamps: true });
const CustomerModel = mongoose_1.default.model('customers', customerSchema);
exports.default = CustomerModel;
//# sourceMappingURL=customers.model.js.map