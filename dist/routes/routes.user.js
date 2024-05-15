"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oauth = require("../middlewares/oauth.js");
//1 paso

var rutaUser = (0, _express.Router)(); //2 paso
// mostar el token, pruebA
// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvbiI6InNhbWkiLCJub21icmUiOiJTYW1hbnRoYSIsImlhdCI6MTcxNTI2OTQ2NywiZXhwIjoxNzE1MjcxODY3fQ.LrQt1KaMGDPNttt1n0imFNQUT6-dnq30-COaia0cG3o"));

//3Ger para mostar datos
rutaUser.get("/user/:id", _controllersUser.mostrarUsuario);
rutaUser.get("/user", _controllersUser.listarUsuario);

// post sirve para guardar o crear
// 201 es de creacion
// 
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.crearUsuario);

// mpdificar
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modificarUsuario);
// borrar
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.eliminarUsuario);

// ÁRA LOGEARSE
rutaUser.post("/login", _controllersUser.logueoUsuario);
var _default = exports["default"] = rutaUser;