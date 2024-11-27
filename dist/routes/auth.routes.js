"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authController = require("../controllers/auth.controller.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _authSchema = require("../schemas/auth.schema.js");
var router = (0, _express.Router)();
router.post("/register", (0, _validatorMiddleware.validateSchema)(_authSchema.registerSchema), _authController.register);
router.post("/login", (0, _validatorMiddleware.validateSchema)(_authSchema.loginSchema), _authController.login);
router.get("/verify", _authController.verifyToken);
router.post("/logout", _authController.verifyToken, _authController.logout);
var _default = exports["default"] = router;