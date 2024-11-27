"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasksController = require("../controllers/tasks.controller.js");
var _authMiddleware = require("../middlewares/auth.middleware.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _taskSchema = require("../schemas/task.schema.js");
var router = (0, _express.Router)();
router.get("/tasks", _authMiddleware.auth, _tasksController.getTasks);
router.post("/tasks", _authMiddleware.auth, (0, _validatorMiddleware.validateSchema)(_taskSchema.createTaskSchema), _tasksController.createTask);
router.get("/tasks/:id", _authMiddleware.auth, _tasksController.getTask);
router.put("/tasks/:id", _authMiddleware.auth, _tasksController.updateTask);
router["delete"]("/tasks/:id", _authMiddleware.auth, _tasksController.deleteTask);
var _default = exports["default"] = router;