import app from "./app.js";
import { mensajeConsola, menssa } from "./message/mensajes.js"


app.listen(app.get("port"), () =>{
    mensajeConsola("puertSucess",
    `${menssa.puerto} ${app.get("port")} http://localhost:${app.get("port")}`);
})



