"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const node_test_1 = require("node:test");
(0, node_test_1.describe)("auth", function () {
    it("should return 200", async () => {
        (0, supertest_1.default)(app_1.default)
            .post("/auth/login/")
            .send({ username: "username", password: "password" })
            .expect(200)
            .end((err, res) => {
            if (err)
                throw err;
        });
    });
});
//# sourceMappingURL=auth.test.js.map