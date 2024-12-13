"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewars/auth.middleware");
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
// i not know why the isAuthenticatedMW not working in client side
router.get("/", auth_middleware_1.isAuthorizedUserMW, users_controller_1.getUsernamesCtrl);
//i want only authenticated admin to be able to register new uses
router.post("/", auth_middleware_1.isAuthorizedUserMW, auth_middleware_1.isAdminUserMW, users_controller_1.registerCtrl);
exports.default = router;
//# sourceMappingURL=users.route.js.map