"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                username: username,
            },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    }
    catch (err) {
        next(err);
    }
});
exports.getUser = getUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json({ users });
    }
    catch (err) {
        next(err);
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const user = yield prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: req.body.name || undefined,
                email: req.body.email || undefined,
                username: req.body.username || undefined,
                password: req.body.password || undefined,
                isAdmin: undefined,
            },
        });
        res.status(200).json({ user });
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const user = yield prisma.user.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json({ user });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map