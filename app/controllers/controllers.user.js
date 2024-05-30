import bcrypt, { hash } from "bcrypt";
import { success,error } from "../message/browser.js";
import pool from "../config/db.mysql.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

// LA UNICA FORMA DE CREAR UNA RUTA ES CON AUTORIZACION
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
        success(req, res, 200, respuesta[0][0]);
    } catch (err) {
        error(req, res, 500, err)

    }
}
// MOSTRAR USUARIO
export const mostrarUsuario = async (req, res) => {
    let id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_MostrarUsuario(${id});`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0][0][0]);
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

// ELIMINAR USUARIO
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

// LOGUEAR USUARIO
// Una función “hash” criptográfica es, como su nombre lo indica,
//  una función matemática utilizada en criptografía donde las más 
// comunes agarran entradas de longitudes versátiles para restituir 
// salidas de una longitud permanente.
// async asincronicamente, trabajar en varia cosas
export const logueoUsuario = async(req, res)=>{
    const {usuario, clave} = req.body;
    // const hash = await bcrypt.hash(clave,2);
    try {
        const respuesta = await pool.query(`CALL sp_BuscarUsuario('${usuario}')`);
        if(respuesta[0][0]==0){
            // const error = new Error("Usuario no existe");
            // res.status(404).json({error: error.message})
            error(req, res, 404, "Usuario no existe");
            return;
        };
        // console.log(respuesta[0][0][0].CLAVE);
        // res.json(respuesta[0]);
        // ROJO: HEADER, ALGOTIRMO Y TIPO
        // MORADO: DATOS
        // AZUL: PRIVATEKEY
        const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE)
        if (!match) {
            error(req, res, 404, "Clave errada");
            return; 
        }
        // CREACION DE TOKEN: Necesitaremos un payload
        let payload = {
            "usuarion" : usuario,
            "nombre" : respuesta[0][0][0].NOMBRE
        }
        let token = await jwt.sign(payload,
            process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });
// si se mete dentro de { } es comol si se dijera token:(resultado)
// JWT.IO- MUESTRA EL TOKEN
        success(req, res, 200, {token});
    }catch (e) {
        // console.log("Error en el servidor", e);
        error(req, res, 500, "Error en el servidor, por favor intentalo de nuevo mas tarde");
    }
}