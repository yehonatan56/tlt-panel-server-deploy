"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewars/auth.middleware");
const customers_cotroller_1 = require("../controllers/customers.cotroller");
const router = express_1.default.Router();
router.get('/', auth_middleware_1.isAuthorizedUserMW, customers_cotroller_1.getCustomersCtrl);
exports.default = router;
//# sourceMappingURL=customers.route.js.map