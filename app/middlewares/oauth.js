//de autorizacion
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { error } from "../message/browser.js";

config();

export const verifyToken = async (req, res, next) => {
    // x-access-token: POara capturar los tokens atraves de los headers
    const token = req.headers["x-access-token"];
    try {
        const valida = await jwt.verify(
            token,
            process.env.TOKEN_PRIVATEKEY
        );
        // SI TODO FUNCIONA, SIGA CON LA SIGUIENTE FUNCION "CREARUSUARIO"
        next();
    } catch (e) {
        // NO SE PONE ERROR PORQUE REQUIERE UNOS PARAMETROS
        error(req, res, 401, e)
    }

}