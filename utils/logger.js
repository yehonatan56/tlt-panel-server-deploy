"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const LOG_DIR_PATH = "logs";
const LOGGING_MODE = "silly";
const LOGGING_LINE_TRACE = ["error"];
const colorizer = winston_1.default.format.colorize();
function stringifyMetaData(metadata = "") {
    if (!metadata || typeof metadata === "string")
        return metadata;
    return Object.keys(metadata).length
        ? `\n\t${Object.keys(metadata)
            .map((key) => {
            const value = metadata[key];
            const valueStr = value && typeof value === "object" ? JSON.stringify(value) : value;
            return `${key}: ${valueStr}`;
        })
            .filter((v) => v)
            .join(",\n\t")}`
        : "";
}
class Logger {
    filterMetadata(metadata) {
        var _a, _b, _c, _d, _e, _f;
        const filteredMetadata = Object.assign({}, metadata);
        if ((_b = (_a = filteredMetadata.data) === null || _a === void 0 ? void 0 : _a._doc) === null || _b === void 0 ? void 0 : _b.image) {
            const imageLength = JSON.stringify((_d = (_c = filteredMetadata.data) === null || _c === void 0 ? void 0 : _c._doc) === null || _d === void 0 ? void 0 : _d.image).length;
            filteredMetadata.data._doc.image = `image ${imageLength} character length`;
        }
        if ((_e = filteredMetadata.data) === null || _e === void 0 ? void 0 : _e.image) {
            const imageLength = JSON.stringify((_f = filteredMetadata.data) === null || _f === void 0 ? void 0 : _f.image).length;
            filteredMetadata.data.image = `image ${imageLength} character length`;
        }
        return filteredMetadata;
    }
    filterImageFromMetadata(metadata) {
        var _a, _b, _c, _d, _e, _f, _g;
        // Used copy to prevent changing the metadata by reference
        const metadataCopy = JSON.parse(JSON.stringify(metadata));
        const filterImage = (image) => {
            const alreadyFilteredSubstring = "character length";
            const isImageFiltered = image.includes(alreadyFilteredSubstring);
            if (!image || isImageFiltered || typeof image !== "string")
                return;
            const newImageValue = `image ${image.length} character length`;
            return newImageValue;
        };
        /* Unfortunately for some reason switch loop making here some bugs and skipping true cases
        for now implemented the old dirty way. */
        if ((_b = (_a = metadataCopy.body) === null || _a === void 0 ? void 0 : _a._doc) === null || _b === void 0 ? void 0 : _b.image) {
            const filteredImage = filterImage(metadataCopy.body._doc.image);
            metadataCopy.body._doc.image = filteredImage;
        }
        else if ((_c = metadataCopy.body) === null || _c === void 0 ? void 0 : _c.image) {
            const filteredImage = filterImage(metadataCopy.body.image);
            metadataCopy.body.image = filteredImage;
        }
        else if ((_e = (_d = metadataCopy.data) === null || _d === void 0 ? void 0 : _d._doc) === null || _e === void 0 ? void 0 : _e.image) {
            const filteredImage = filterImage(metadataCopy.data._doc.image);
            metadataCopy.data._doc.image = filteredImage;
        }
        else if ((_f = metadataCopy.data) === null || _f === void 0 ? void 0 : _f.image) {
            const filteredImage = filterImage(metadataCopy.data.image);
            metadataCopy.data.image = filteredImage;
        }
        else if ((_g = metadataCopy.response) === null || _g === void 0 ? void 0 : _g.image) {
            const filteredImage = filterImage(metadataCopy.response.image);
            metadataCopy.response.image = filteredImage;
        }
        return metadataCopy;
    }
    constructor() {
        const transportDailyRotateFile = new winston_daily_rotate_file_1.default({
            dirname: LOG_DIR_PATH,
            extension: ".log",
            filename: "tlt-%DATE%",
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            level: LOGGING_MODE,
        });
        this.logger = winston_1.default.createLogger({
            transports: [
                transportDailyRotateFile,
                new winston_1.default.transports.Console({ level: LOGGING_MODE }),
            ],
            format: winston_1.default.format.combine(winston_1.default.format.splat(), winston_1.default.format.timestamp(), winston_1.default.format.printf((_a) => {
                var { timestamp, level, request_id, message } = _a, metadata = __rest(_a, ["timestamp", "level", "request_id", "message"]);
                return colorizer.colorize(level, `${timestamp} [${level}] [${request_id}] ${message} ${stringifyMetaData(metadata)}\n`);
            })),
        });
        this.logger.on("error", (error) => {
            console.error("Logger Error Caught: ", error);
        });
    }
    static getLineTrace(error) {
        var _a;
        const lineTraces = ((_a = error === null || error === void 0 ? void 0 : error.stack) === null || _a === void 0 ? void 0 : _a.split("\n").filter((line) => !/\\logger\.[jt]s:\d+:\d+\),?$/.test(line))) || [];
        let lineTrace = lineTraces[1];
        for (const line of lineTraces.slice(1)) {
            const isLoggerFile = /[lL]ogger\.[tj]s:\d+:\d+\)$/.test(line.trim());
            if (!isLoggerFile) {
                lineTrace = line;
                break;
            }
        }
        return lineTrace.trimStart();
    }
    writeLog(level, request_id, message, options = {}) {
        if (options === null || options === void 0 ? void 0 : options.hasOwnProperty("message")) {
            options.$message = options.message;
            delete options.message;
        }
        let lineTrace;
        if (LOGGING_LINE_TRACE.includes(level) || level === "error" /* LEVELS.error */) {
            const error = new Error(message);
            lineTrace = Logger.getLineTrace(error);
        }
        if (lineTrace) {
            options.lineTrace = lineTrace;
        }
        this.logger.log(level, message, Object.assign({ request_id }, this.filterImageFromMetadata(options)));
    }
    error(request_id, message, metadata = {}) {
        this.writeLog("error" /* LEVELS.error */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    warn(request_id, message, metadata = {}) {
        this.writeLog("warn" /* LEVELS.warn */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    info(request_id, message, metadata = {}) {
        this.writeLog("info" /* LEVELS.info */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    debug(request_id, message, metadata = {}) {
        this.writeLog("debug" /* LEVELS.debug */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    verbose(request_id, message, metadata = {}) {
        this.writeLog("verbose" /* LEVELS.verbose */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    userAction(request_id, message, metadata = {}) {
        this.writeLog("useraction" /* LEVELS.useraction */, request_id, message, this.filterImageFromMetadata(metadata));
    }
    silly(request_id, message, metadata = {}) {
        this.writeLog("silly" /* LEVELS.silly */, request_id, message, this.filterImageFromMetadata(metadata));
    }
}
const logger = new Logger();
exports.default = logger;
// Print the first log, with the current logging mode
logger[LOGGING_MODE]("LOGGER", "logger instance created", {
    LOGGING_MODE,
});
//# sourceMappingURL=logger.js.map