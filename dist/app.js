"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
var _dbMysql = _interopRequireDefault(require("./config/db.mysql.js"));
(0, _dotenv.config)();
var app = (0, _express["default"])();
// mddleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set("port", process.env.PORT || 3000);

//Rutas
app.use("/", _index["default"]);
var _default = exports["default"] = app;