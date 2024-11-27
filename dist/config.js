"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKEN_SECRET = exports.PORT = exports.MONGODB_URI = exports.FRONTEND_URL = void 0;
var PORT = exports.PORT = process.env.PORT || 4000;
var MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-tasks";
var TOKEN_SECRET = exports.TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";
var FRONTEND_URL = exports.FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";