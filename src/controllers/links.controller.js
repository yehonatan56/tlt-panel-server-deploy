"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editLinkCtrl = exports.uploadCtrl = exports.purchaseCtrl = exports.getPagesCtrl = exports.getHighestPurchasesCtrl = exports.deleteLinkCtrl = exports.createLinkCtrl = exports.getLinksCtrl = void 0;
const links_service_1 = require("../services/links.service");
const getLinksCtrl = async (req, res, next) => {
    try {
        const links = await (0, links_service_1.getLinksServiceHandler)(req.query);
        res.json(links);
    }
    catch (e) {
        res.json(e);
    }
};
exports.getLinksCtrl = getLinksCtrl;
const createLinkCtrl = async (req, res, next) => {
    try {
        const link = await (0, links_service_1.createLinkServiceHandler)(req.body);
        res.json(link);
    }
    catch (e) {
        res.json(e);
    }
};
exports.createLinkCtrl = createLinkCtrl;
const deleteLinkCtrl = async (req, res, next) => {
    try {
        const link = await (0, links_service_1.deleteLinkServiceHandler)(req.params.id);
        res.json(link);
    }
    catch (e) {
        res.json(e);
    }
};
exports.deleteLinkCtrl = deleteLinkCtrl;
const getHighestPurchasesCtrl = async (req, res, next) => {
    try {
        const links = await (0, links_service_1.getHighestPurchasesServiceHandler)();
        res.json(links);
    }
    catch (e) {
        next(e);
    }
};
exports.getHighestPurchasesCtrl = getHighestPurchasesCtrl;
const getPagesCtrl = async (req, res, next) => {
    try {
        const pages = await (0, links_service_1.getPagesServiceHandler)();
        res.json(pages);
    }
    catch (e) {
        next(e);
    }
};
exports.getPagesCtrl = getPagesCtrl;
const uploadCtrl = async (req, res, next) => {
    res.json({
        image: req.fileGenaratedName,
    });
};
exports.uploadCtrl = uploadCtrl;
const purchaseCtrl = async (req, res, next) => {
    try {
        const link = await (0, links_service_1.purchaseServiceHandler)(req.body.link, req.customerID);
        res.json(link);
    }
    catch (e) {
        res.json(e);
    }
};
exports.purchaseCtrl = purchaseCtrl;
const editLinkCtrl = async (req, res, next) => {
    try {
        const link = await (0, links_service_1.editLinkServiceHandler)(req.params.id, req.body);
        res.json(link);
    }
    catch (e) {
        res.json(e);
    }
};
exports.editLinkCtrl = editLinkCtrl;
//# sourceMappingURL=links.controller.js.map