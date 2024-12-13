"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMW = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const loggerMW = (req, _res, next) => {
    logger_1.default.info(req.id, `${req.method} ${req.originalUrl}`);
    next();
};
exports.loggerMW = loggerMW;
//# sourceMappingURL=logger.middleware.js.map