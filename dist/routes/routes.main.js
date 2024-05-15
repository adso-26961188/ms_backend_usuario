"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _browser = require("../message/browser.js");
//1 paso
//3 paso

var rutaMain = (0, _express.Router)(); //2 paso

rutaMain.get("/", function (req, res) {
  //4 paso
  res.json({
    "respuesta": _browser.messageBrowse.principal
  });
});
rutaMain.get("/home", function (req, res) {
  //4.1
  res.json({
    "home": _browser.messageBrowse.home
  });
});
rutaMain.get("/galery", function (req, res) {
  //4.2
  res.json({
    "galery": _browser.messageBrowse.galery
  });
});
rutaMain.get("/about", function (req, res) {
  //4.3
  res.json({
    "about": _browser.messageBrowse.about
  });
});
rutaMain.get("/contact", function (req, res) {
  //4.4
  res.json({
    "contact": _browser.messageBrowse.contact
  });
});
var _default = exports["default"] = rutaMain; //5 paso