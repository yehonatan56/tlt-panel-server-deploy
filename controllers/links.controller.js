"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editLinkCtrl = exports.purchaseCtrl = exports.uploadCtrl = exports.getPagesCtrl = exports.getHighestPurchasesCtrl = exports.deleteLinkCtrl = exports.createLinkCtrl = exports.getLinksCtrl = void 0;
const cloudinary_1 = require("cloudinary");
const links_service_1 = require("../services/links.service");
const requestID_middleware_1 = require("../middlewars/requestID.middleware");
const getLinksCtrl = async (req, res, next) => {
    var _a;
    try {
        const links = await (0, links_service_1.getLinksServiceHandler)(req.query);
        res.json(links);
    }
    catch (e) {
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.getLinksCtrl = getLinksCtrl;
const createLinkCtrl = async (req, res, next) => {
    var _a;
    try {
        const link = await (0, links_service_1.createLinkServiceHandler)(req.body);
        res.json(link);
    }
    catch (e) {
        res.status(401).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.createLinkCtrl = createLinkCtrl;
const deleteLinkCtrl = async (req, res, next) => {
    var _a;
    try {
        const link = await (0, links_service_1.deleteLinkServiceHandler)(req.params.id);
        res.json(link);
    }
    catch (e) {
        res.status(401).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.deleteLinkCtrl = deleteLinkCtrl;
const getHighestPurchasesCtrl = async (_req, res, next) => {
    var _a;
    try {
        const links = await (0, links_service_1.getHighestPurchasesServiceHandler)();
        res.json(links);
    }
    catch (e) {
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.getHighestPurchasesCtrl = getHighestPurchasesCtrl;
const getPagesCtrl = async (_req, res, next) => {
    var _a;
    try {
        const pages = await (0, links_service_1.getPagesServiceHandler)();
        res.json(pages);
    }
    catch (e) {
        res.status(204).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.getPagesCtrl = getPagesCtrl;
const uploadCtrl = async (req, res, _next) => {
    if (!req.file)
        return res.sendStatus(400); // If there's no image, respond with bad request error
    const publicId = `${(0, requestID_middleware_1.generateV4UUID)()}-${req.file.originalname}`;
    try {
        // Base 64 encode the file to create a data URI for the uploader
        const base64EncodedImage = Buffer.from(req.file.buffer).toString('base64');
        const dataUri = 'data:' + req.file.mimetype + ';base64,' + base64EncodedImage;
        // Use the cloudinary uploader to upload the image
        cloudinary_1.v2.uploader
            .upload(dataUri, { public_id: publicId, folder: 'tlt' }, function (error, response) {
            if (error) {
                return res.status(500).json({ err: error });
            }
            // Return the public_id (or whatever else you want)
            return res.status(201).json({ publicId: response.public_id, url: response.url });
        })
            .then((r) => console.log(r));
    }
    catch (err) {
        return res.status(500).json({ err: err });
    }
};
exports.uploadCtrl = uploadCtrl;
const purchaseCtrl = async (req, res, next) => {
    var _a;
    try {
        const link = await (0, links_service_1.purchaseServiceHandler)(req.body.link, req.customerID);
        res.json(link);
    }
    catch (e) {
        res.status(500).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.purchaseCtrl = purchaseCtrl;
const editLinkCtrl = async (req, res, next) => {
    var _a;
    try {
        const link = await (0, links_service_1.editLinkServiceHandler)(req.params.id, req.body);
        res.json(link);
    }
    catch (e) {
        res.status(500).send((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e);
    }
};
exports.editLinkCtrl = editLinkCtrl;
//# sourceMappingURL=links.controller.js.map