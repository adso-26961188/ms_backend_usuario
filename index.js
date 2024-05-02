import app from "./app/app.js";
import { mensajeConsola, menssa } from "./app/message/mensajes.js"


app.listen(app.get("port"), () =>{
    mensajeConsola("puertSucess",
    `${menssa.puerto} ${app.get("port")} http://localhost:${app.get("port")}`);
})



