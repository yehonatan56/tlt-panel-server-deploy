"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_route_1 = __importDefault(require("./users.route"));
const links_route_1 = __importDefault(require("./links.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const customers_route_1 = __importDefault(require("./customers.route"));
const routes = (app) => {
    app.use('/users', users_route_1.default);
    app.use('/links', links_route_1.default);
    app.use('/auth', auth_route_1.default);
    app.use('/customers', customers_route_1.default);
};
exports.default = routes;
//# sourceMappingURL=index.js.map