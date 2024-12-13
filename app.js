"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./config/express"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
(0, db_1.default)()
    .then(() => (0, express_2.default)(app))
    .then(() => {
    app.listen(3000, () => {
        logger_1.default.info('', 'Server started on port 3000');
    });
})
    .catch((err) => {
    logger_1.default.error('', 'Error connecting to database', { error: err });
});
exports.default = app;
//# sourceMappingURL=app.js.map