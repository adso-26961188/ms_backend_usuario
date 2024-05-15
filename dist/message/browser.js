"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.messageBrowse = exports.error = void 0;
var messageBrowse = exports.messageBrowse = {
  home: "Hola Home",
  galery: "Hola Bienvenida Galery",
  about: "Que Más About",
  contact: "Regalame tú Contact",
  principal: "Por Defecto"
};

//4 paso de routes.user.js
var success = exports.success = function success(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  //estamos inicianizandole los parametros por defecto
  res.status(status).json({
    error: false,
    status: status,
    body: mensaje
  });
};
var error = exports.error = function error(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  //estamos inicianizandole los parametros por defecto
  res.status(status).json({
    error: true,
    status: status,
    body: mensaje
  });
};