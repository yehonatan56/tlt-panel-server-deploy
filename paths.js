"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSIONS_PATH = exports.ENV_PATH = exports.PUBLIC_PATH = void 0;
const path_1 = __importDefault(require("path"));
const enviromment_varibals_1 = require("./utils/enviromment-varibals");
const envPath = () => {
    switch (enviromment_varibals_1.NODE_ENV) {
        case 'local':
        case 'localhost':
        case undefined:
        case '':
            return '.env.local';
        case 'test':
            return '.env.test';
        default:
            return '.env';
    }
};
exports.PUBLIC_PATH = path_1.default.join(__dirname, '..', 'public');
exports.ENV_PATH = path_1.default.join(__dirname, '..', envPath());
exports.SESSIONS_PATH = path_1.default.join(__dirname, '..', 'sessions');
console.log(exports.PUBLIC_PATH);
//# sourceMappingURL=paths.js.map