"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_PATH = exports.PUBLIC_PATH = void 0;
const path_1 = __importDefault(require("path"));
const envPath = () => {
    if (["local", "localhost", undefined, ""].includes(process.env.NODE_ENV)) {
        return ".env.local";
    }
    else if (process.env.NODE_ENV === "test") {
        return ".env.test";
    }
    return ".env";
};
exports.PUBLIC_PATH = path_1.default.join(__dirname, "..", "public");
exports.ENV_PATH = path_1.default.join(__dirname, "..", envPath());
console.log(exports.PUBLIC_PATH);
//# sourceMappingURL=paths.js.map