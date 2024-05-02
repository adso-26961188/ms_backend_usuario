import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index.js";
config();


const app = express();
// mddleware
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.set("port", process.env.PORT || 3000)

//Rutas
app.use("/", ruta);

export default app;