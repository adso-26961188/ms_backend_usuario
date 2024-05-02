import { Router } from "express"; //1 paso
import {messageBrowse} from "../message/browser.js"; //3 paso

const rutaMain = Router(); //2 paso

rutaMain.get("/", (req, res) => { //4 paso
    res.json({"respuesta":messageBrowse.principal})
})

rutaMain.get("/home", (req, res) => { //4.1
    res.json({"home":messageBrowse.home})
})

rutaMain.get("/galery", (req, res) => { //4.2
    res.json({"galery":messageBrowse.galery})
})

rutaMain.get("/about", (req, res) => { //4.3
    res.json({"about":messageBrowse.about})
})

rutaMain.get("/contact", (req, res) => { //4.4
    res.json({"contact":messageBrowse.contact})
})

export default rutaMain; //5 paso