/*import "dotenv/config";
import express from "express";
import routes from "./routes/next_courses.js";
const app = express();
const {
   
    verTodos,
    borrarDocumento,
    actualizarDocumento
  } = require('./mongoOperations');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/next_courses", routes);

try{
    const port = process.env.port || 3000;
    app.listen(port, () => console.log(`Servidor activo en el puerto` + port));

} catch(e){
    console.log(e)

}
    */
import express,{ json, urlencoded } from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))

app.use(cors())

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on port ${port}`))