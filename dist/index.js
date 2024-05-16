"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _mensajes = require("./message/mensajes.js");
_app["default"].listen(_app["default"].get("port"), function () {
  (0, _mensajes.mensajeConsola)("puertSucess", "".concat(_mensajes.menssa.puerto, " ").concat(_app["default"].get("port"), " http://localhost:").concat(_app["default"].get("port")));
});