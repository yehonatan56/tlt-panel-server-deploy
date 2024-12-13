"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userHook = (schema) => {
    schema.pre('save', async function (next) {
        if (this.isModified('password')) {
            this.password = await bcrypt_1.default.hash(this.password, 10);
        }
        next();
    });
};
exports.default = userHook;
//# sourceMappingURL=user.hook.js.map