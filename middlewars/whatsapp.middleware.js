"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappMW = void 0;
const whatsapp_1 = __importDefault(require("../utils/whatsapp"));
const enviromment_varibals_1 = require("../utils/enviromment-varibals");
const whatsappMW = async (req, res, next) => {
    const message = `
    new purchase:
    name: ${req.body.firstName} ${req.body.lastName}
    phone: ${req.body.phone}
    email: ${req.body.email}
    address: ${req.body.address}
    city: ${req.body.city}
    pickup method: ${req.body.pickupMethod}
    `;
    await whatsapp_1.default.sendMessage(enviromment_varibals_1.WHATSAPP_GROUP_ID, message);
    next();
};
exports.whatsappMW = whatsappMW;
//# sourceMappingURL=whatsapp.middleware.js.map