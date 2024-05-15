import colors from "colors";

export const mensajeConsola = (tipo, mensaje) =>{
    switch (tipo){
        case "puertSucess":
            console.log(mensaje.bgGreen);
        break;
        case "puertError":
            console.log(mensaje.bgRed);
        break;
    }
}


export const menssa = {
    puerto: "Backend - Ejecutandose en el puerto:",
}