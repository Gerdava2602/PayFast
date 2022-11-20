"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
//CRUD operations
router.post('/register', [
    (0, express_validator_1.check)("email", "Please input a valid email")
        .isEmail(),
    (0, express_validator_1.check)("password", "Please input a password with a min length of 6")
        .isLength({ min: 6 })
], auth_1.register);
router.post('/login', auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map