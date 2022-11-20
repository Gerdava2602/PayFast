"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const jwt_1 = require("../utils/jwt");
const router = (0, express_1.Router)();
//CRUD operations
router.get('/', jwt_1.verifyAdmin, users_1.getUsers);
router.get('/:username', jwt_1.verifyUser, users_1.getUser);
router.put('/:id', jwt_1.verifyUser, users_1.updateUser);
router.delete('/:id', jwt_1.verifyUser, users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map