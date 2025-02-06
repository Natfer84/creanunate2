import express from "express";
const route = express.Router();
import coursesControllers from "../controllers/coursesControllers.js";

route.post('/next_courses/create', coursesControllers.create );
//trae un registro de BD meiante el id.
route.get('/next_courses/getOne:id', coursesControllers.getOne);
//trae todos los registros de la BD
route.get('/next_courses/getAll', coursesControllers.getAll);
route.patch('/next_courses/update:id', coursesControllers.update);
route.delete('/next_courses/detele:id', coursesControllers.delete);

export default route;