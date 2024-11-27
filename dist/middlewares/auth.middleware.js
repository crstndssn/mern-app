"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var auth = exports.auth = function auth(req, res, next) {
  try {
    var token = req.cookies.token;
    if (!token) return res.status(401).json({
      message: "No token, authorization denied"
    });
    _jsonwebtoken["default"].verify(token, _config.TOKEN_SECRET, function (error, user) {
      if (error) {
        return res.status(401).json({
          message: "Token is not valid"
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};