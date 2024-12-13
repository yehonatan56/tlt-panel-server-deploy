"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewars/auth.middleware");
const links_controller_1 = require("../controllers/links.controller");
const customers_cotroller_1 = require("../controllers/customers.cotroller");
const logger_middleware_1 = require("../middlewars/logger.middleware");
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const whatsapp_middleware_1 = require("../middlewars/whatsapp.middleware");
const router = express_1.default.Router();
router.use(logger_middleware_1.loggerMW);
router.get('/', auth_middleware_1.isAuthorizedUserMW, links_controller_1.getLinksCtrl);
router.get('/pages', auth_middleware_1.isAuthorizedUserMW, links_controller_1.getPagesCtrl);
router.get('/highest', auth_middleware_1.isAuthorizedUserMW, links_controller_1.getHighestPurchasesCtrl);
router.post('/', auth_middleware_1.isAuthorizedUserMW, links_controller_1.createLinkCtrl);
router.post('/purchase', customers_cotroller_1.addCustomerCtrl, whatsapp_middleware_1.whatsappMW, links_controller_1.purchaseCtrl);
router.post('/upload', auth_middleware_1.isAuthorizedUserMW, cloudinary_1.default.single('image'), links_controller_1.uploadCtrl);
router.put('/:id', auth_middleware_1.isAuthorizedUserMW, links_controller_1.editLinkCtrl);
router.delete('/:id', auth_middleware_1.isAuthorizedUserMW, links_controller_1.deleteLinkCtrl);
exports.default = router;
//# sourceMappingURL=links.route.js.map