"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _taskRoutes = _interopRequireDefault(require("./routes/task.routes.js"));
var _config = require("./config.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  credentials: true,
  origin: _config.FRONTEND_URL
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use((0, _cookieParser["default"])());
app.use("/api/auth", _authRoutes["default"]);
app.use("/api", _taskRoutes["default"]);
if (process.env.NODE_ENV === "production") {
  var path = await Promise.resolve().then(function () {
    return _interopRequireWildcard(require("path"));
  });
  app.use(_express["default"]["static"]("client/dist"));
  app.get("*", function (req, res) {
    console.log(path.resolve("client", "dist", "index.html"));
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}
var _default = exports["default"] = app;