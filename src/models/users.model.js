"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_hook_1 = __importDefault(require("../hooks/user.hook"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Name is required"],
        unique: [true, "Name must be unique"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
});
(0, user_hook_1.default)(userSchema);
const UserModel = mongoose_1.default.model("users", userSchema);
//new UserModel({ username: "admin", password: "admin", role: "admin" }).save();
// new UserModel({ username: "user", password: "user", role: "user" }).save();
exports.default = UserModel;
//# sourceMappingURL=users.model.js.map