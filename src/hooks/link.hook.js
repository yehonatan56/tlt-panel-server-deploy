"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PREFIX_URL = "https://thelosttreasures.net/?";
const addPrefix = (link) => {
    if (link.startsWith(PREFIX_URL)) {
        return link;
    }
    return PREFIX_URL + link;
};
const linkHook = (schema) => {
    schema.pre("save", function (next) {
        this.link = addPrefix(this.link);
        next();
    });
    schema.pre("findOneAndUpdate", function (next) {
        const update = this.getUpdate();
        if (update.link) {
            update.link = addPrefix(update.link);
        }
        next();
    });
};
exports.default = linkHook;
//# sourceMappingURL=link.hook.js.map