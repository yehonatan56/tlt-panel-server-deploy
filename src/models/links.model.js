"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const link_hook_1 = __importDefault(require("../hooks/link.hook"));
const linkSchema = new mongoose_1.default.Schema({
    link: {
        type: String,
        required: [true, "Link is required"],
        unique: [true, "Link must be unique"],
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
        //required: [true, "User is required"],
    },
    purchases: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
    },
    customers: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "customers",
            required: [true, "Customer is required"],
        },
    ],
}, { timestamps: true });
(0, link_hook_1.default)(linkSchema);
const LinkModel = mongoose_1.default.model("links", linkSchema);
// new LinkModel({ link: "default" }).save();
exports.default = LinkModel;
//# sourceMappingURL=links.model.js.map