import { success } from "../message/browser.js";
import pool from "../config/db.mysql.js";

// Metodos a desarrolar en nustra ruta
export const crearUsuario = (req, res)=>{
    const dato = req.body;
    console.log(dato);
    success(req, res, 201,"post Ha ingresado un dato");
};
export const mostrarUsuario =  async(req, res)=>{
    
    const respuesta = await pool.query("select * from producto")
    console.log(respuesta);
    success(req, res, 200, respuesta);
};
export const modificarUsuario = (req, res)=>{
    const dato = req.body;
    success(req, res, 200,"put Ha modificado un dato");
};
export const eliminarUsuario =(req, res)=>{
    const dato = req.body;
    success(req, res, 200,"delete Ha eliminado un dato");
};