import { Router } from "express"; //1 paso


import { 
    crearUsuario, 
    eliminarUsuario, 
    listarUsuario, 
    modificarUsuario, 
    mostrarUsuario, 
    logueoUsuario} from "../controllers/controllers.user.js";
import { verifyToken } from "../middlewares/oauth.js";

const rutaUser = Router(); //2 paso
// mostar el token, pruebA
// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvbiI6InNhbWkiLCJub21icmUiOiJTYW1hbnRoYSIsImlhdCI6MTcxNTI2OTQ2NywiZXhwIjoxNzE1MjcxODY3fQ.LrQt1KaMGDPNttt1n0imFNQUT6-dnq30-COaia0cG3o"));

//3Ger para mostar datos
rutaUser.get("/user/:id", mostrarUsuario);
rutaUser.get("/user", listarUsuario);

// post sirve para guardar o crear
// 201 es de creacion
// 
rutaUser.post("/user",verifyToken, crearUsuario);

// mpdificar
rutaUser.put("/user" ,verifyToken, modificarUsuario);
// borrar
rutaUser.delete("/user",verifyToken, eliminarUsuario);

// ÁRA LOGEARSE
rutaUser.post("/login", logueoUsuario )
export default rutaUser;
