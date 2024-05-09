export const  messageBrowse = {
    home:"Hola Home",
    galery:"Hola Bienvenida Galery",
    about:"Que Más About",
    contact: "Regalame tú Contact",
    principal: "Por Defecto"
};



//4 paso de routes.user.js
export const success = (req, res, status=200, mensaje="")=>{

//estamos inicianizandole los parametros por defecto
    res.status(status).json({
        error:false,
        status:status,
        body:mensaje
    })
};

export const error = (req, res, status=500, mensaje="")=>{

    //estamos inicianizandole los parametros por defecto
        res.status(status).json({
            error:true,
            status:status,
            body:mensaje
        })
    };







