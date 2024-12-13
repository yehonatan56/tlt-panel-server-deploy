"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../config/db"));
const paths_1 = require("../paths");
jest.setTimeout(30000);
dotenv_1.default.config({ path: paths_1.ENV_PATH });
beforeAll(async () => {
    await (0, db_1.default)();
});
//# sourceMappingURL=jest.js.map