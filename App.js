import "dotenv/config";
import express from "express";
import routesNextCourses from "./routes/next_courses.js";

const app = express();

app.use("/next_courses", routesNextCourses);

try{
    const port = process.env.port || 3000;
    app.listen(port, () => console.log(`Servidor activo en el puerto` + port));

} catch(e){
    console.log(e)

}