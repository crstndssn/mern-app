"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerSchema = exports.registerSchema = _zod.z.object({
  username: _zod.z.string({
    required_error: "username is required"
  }),
  email: _zod.z.string({
    required_error: "Username is required"
  }).email({
    required_error: "Username is required"
  }),
  password: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "Password must be at least 6 characters"
  })
});
var loginSchema = exports.loginSchema = _zod.z.object({
  email: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "Password must be at least 6 characters"
  }),
  password: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "Password must be at least 6 characters"
  })
});