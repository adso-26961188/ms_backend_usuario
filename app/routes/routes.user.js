import { Router } from "express"; //1 paso
import { crearUsuario, eliminarUsuario, modificarUsuario, mostrarUsuario } from "../controllers/controllers.user.js";

const rutaUser = Router(); //2 paso

//3Ger para mostar datos
rutaUser.get("/user", mostrarUsuario);

// post sirve para guardar o crear
// 201 es de creacion
rutaUser.post("/user", crearUsuario);

// mpdificar
rutaUser.put("/user" , modificarUsuario);
// borrar
rutaUser.delete("/user", eliminarUsuario);
export default rutaUser;
