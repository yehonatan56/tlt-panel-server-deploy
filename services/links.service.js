"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editLinkServiceHandler = exports.purchaseServiceHandler = exports.getPagesServiceHandler = exports.getHighestPurchasesServiceHandler = exports.getLinksServiceHandler = exports.deleteLinkServiceHandler = exports.createLinkServiceHandler = void 0;
const links_model_1 = __importDefault(require("../models/links.model"));
const createLinkServiceHandler = async ({ link, image }) => {
    const linkDoc = new links_model_1.default({ link, image });
    await linkDoc.save();
    return linkDoc;
};
exports.createLinkServiceHandler = createLinkServiceHandler;
const deleteLinkServiceHandler = async (id) => {
    const link = await links_model_1.default.findByIdAndDelete(id);
    return link;
};
exports.deleteLinkServiceHandler = deleteLinkServiceHandler;
const getLinksServiceHandler = async (filters) => {
    const { page = undefined, min: purchasesLower = 0, max: purchasesHigh = '1000', dateFrom, dateTo } = filters;
    const links = await links_model_1.default
        .find({
        purchases: { $gte: +purchasesLower, $lte: +purchasesHigh },
        // createdAt: { $gte: dateFrom, $lte: dateTo },
    })
        .limit(8)
        .skip((page - 1) * 8);
    return links;
};
exports.getLinksServiceHandler = getLinksServiceHandler;
// this route is`nt used in the frontend
const getHighestPurchasesServiceHandler = async () => {
    const links = await links_model_1.default.find().sort({ purchases: -1 }).limit(3);
    return links;
};
exports.getHighestPurchasesServiceHandler = getHighestPurchasesServiceHandler;
const getPagesServiceHandler = async () => {
    const linksPerPage = 8;
    const linksCount = await links_model_1.default.countDocuments();
    const pages = Math.ceil(linksCount / linksPerPage);
    return pages;
};
exports.getPagesServiceHandler = getPagesServiceHandler;
const purchaseServiceHandler = async (link, customerID) => {
    // todo : make upsert command (findOneAndUpdate upsert true) instead of these code
    const linkDoc = await links_model_1.default.updateOne({ link }, {
        $inc: { purchases: 1 },
        $addToSet: { customers: customerID },
    }, { new: true });
    if (linkDoc.modifiedCount === 0) {
        const linkDoc = await links_model_1.default.findOneAndUpdate({ link: 'https://thelosttreasures.net/?default' }, {
            $inc: { purchases: 1 },
            $addToSet: { customers: customerID },
        }, { new: true });
        return linkDoc;
    }
    return linkDoc;
};
exports.purchaseServiceHandler = purchaseServiceHandler;
const editLinkServiceHandler = async (id, { link, image }) => {
    const linkDoc = await links_model_1.default.findOneAndUpdate({ _id: id }, { link, image }, { new: true });
    return linkDoc;
};
exports.editLinkServiceHandler = editLinkServiceHandler;
//# sourceMappingURL=links.service.js.map