"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const users_model_1 = __importDefault(require("../users.model"));
(0, node_test_1.describe)("bcrypt", function () {
    it("hash", async () => {
        const user = new users_model_1.default({
            username: "username",
            password: "password",
            role: "user",
        });
        const res = await user.save();
        expect(res.password).not.toBe("password");
    });
});
//# sourceMappingURL=users.test.js.map