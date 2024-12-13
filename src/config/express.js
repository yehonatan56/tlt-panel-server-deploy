"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("../routes/index"));
const paths_1 = require("../paths");
const logger_1 = __importDefault(require("../utils/logger"));
dotenv_1.default.config({ path: paths_1.ENV_PATH });
exports.default = (app) => {
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static(paths_1.PUBLIC_PATH));
    app.use("*", (req, res, next) => {
        logger_1.default.info("", `${req.method} ${req.originalUrl}`);
        next();
    });
    (0, index_1.default)(app);
};
//# sourceMappingURL=express.js.map