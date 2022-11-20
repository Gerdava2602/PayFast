"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.verifyAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res) => {
    jsonwebtoken_1.default.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req['user'] = decoded;
    });
};
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res);
    if (req['user'].isAdmin) {
        next();
    }
    else {
        return res.status(403).json({ message: "Forbidden" });
    }
};
exports.verifyAdmin = verifyAdmin;
const verifyUser = (req, res, next) => {
    verifyToken(req, res);
    if (req['user'].id == req.params.id || req['user'].isAdmin) {
        next();
    }
    else {
        return res.status(403).json({ message: "Forbidden" });
    }
};
exports.verifyUser = verifyUser;
//# sourceMappingURL=jwt.js.map