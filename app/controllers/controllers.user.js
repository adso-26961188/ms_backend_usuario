import bcrypt, { hash } from "bcrypt";
import { success,error } from "../message/browser.js";
import pool from "../config/db.mysql.js";
import { config } from "dotenv";
config();


// Metodos a desarrolar en nustra ruta

// CREAR USUARIO
export const crearUsuario = async(req, res) => {
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    
    try {
        // Encriptar la contraseña, await para funciones externas
        const hash = await bcrypt.hash(claveSinCifrar,2);
        const clave = hash;
        const respuesta = await pool.query(`CALL sp_CrearUsuario('${nombre}','${usuario}','${clave}'); `);
        if (respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Usuario Creado");
        }else{
            error(req, res, 400, "No se pudo agragar el nuevo usuario")

        }   
    } catch (err) {
        error(req, res, 400, err)
    }
};

// LISTAR USUARIOS
export const listarUsuario = async(req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_ListarUsuario(); `);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)

    }
}
export const mostrarUsuario = async (req, res) => {
    let id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_MostrarUsuario(${id});`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)

    }
};

// MODIFICAR USUARIO
export const modificarUsuario = async(req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respuesta = await pool.query(`CALL sp_ModificarUsuario(${id}, '${nombre}','${usuario}','${clave}'); `);
        if (respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Usuario Modificado" + usuario);
        }else{
            error(req, res, 400, "No se pudo modificar el usuario: "+ usuario);

        }   
    } catch (err) {
        error(req, res, 400, err)
    }
};
export const eliminarUsuario = async(req, res) => {
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_EliminarUsuario(${id});`);
        if (respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Usuario Eliminado");
        }else{
            error(req, res, 400, "No se pudo eliminar el usuario: ");

        }   
    } catch (err) {
        error(req, res, 400, err);
    }
};
// async asincronicamente, trabajar en varia cosas
export const logueoUsuario = async(req, res)=>{
    const {usuario, clave} = req.body;
    const hash = await bcrypt.hash(clave,2);
    try {
        const respuesta = await pool.query(`CALL sp_BuscarUsuario('${usuario}')`);
        if(respuesta[0][0]==0){
            const error = new Error("Usuario no existe");
            res.status(404).json({error: error.message})
            return;
        };
        res.json(respuesta[0]);
    }catch (error) {
        res.json(error);
    }
}