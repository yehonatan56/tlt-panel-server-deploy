"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const logger_middleware_1 = require("../middlewars/logger.middleware");
const router = (0, express_1.Router)();
router.use(logger_middleware_1.loggerMW);
router.post('/login', auth_controller_1.loginCtrl);
router.post('/logout', (_req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
});
exports.default = router;
//# sourceMappingURL=auth.route.js.map