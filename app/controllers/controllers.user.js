import { success,error } from "../message/browser.js";
import pool from "../config/db.mysql.js";

// Metodos a desarrolar en nustra ruta
export const crearUsuario = (req, res) => {
    const dato = req.body;
    console.log(dato);
    success(req, res, 201, "post Ha ingresado un dato");
};
export const mostrarUsuario = async (req, res) => {
    try {
        const respuesta = await pool.query("CALL sp_MostrarUsuario(1); ");
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)

    }
};
export const modificarUsuario = (req, res) => {
    const dato = req.body;
    success(req, res, 200, "put Ha modificado un dato");
};
export const eliminarUsuario = (req, res) => {
    const dato = req.body;
    success(req, res, 200, "delete Ha eliminado un dato");
};