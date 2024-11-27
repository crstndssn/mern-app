"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTaskSchema = void 0;
var _zod = require("zod");
var createTaskSchema = exports.createTaskSchema = _zod.z.object({
  title: _zod.z.string({
    required_error: "Title is required"
  }),
  description: _zod.z.string({
    required_error: "Description must be a string"
  }).optional(),
  date: _zod.z.string().datetime().optional()
});