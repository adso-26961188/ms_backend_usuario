import { Router } from "express"; //1 paso
import { 
    crearUsuario, 
    eliminarUsuario, 
    listarUsuario, 
    modificarUsuario, 
    mostrarUsuario, 
    logueoUsuario} from "../controllers/controllers.user.js";

const rutaUser = Router(); //2 paso

//3Ger para mostar datos
rutaUser.get("/user/:id", mostrarUsuario);
rutaUser.get("/user", listarUsuario);

// post sirve para guardar o crear
// 201 es de creacion
rutaUser.post("/user", crearUsuario);

// mpdificar
rutaUser.put("/user" , modificarUsuario);
// borrar
rutaUser.delete("/user", eliminarUsuario);

// ÁRA LOGEARSE
rutaUser.post("/login", logueoUsuario )
export default rutaUser;
