/*import express from "express";
const route = express.Router();
import CoursesControllers from "../controllers/coursesControllers.js";

route.post('/next_courses/create', CoursesControllers.create );
//trae un registro de BD meiante el id.
route.get('/next_courses/getOne/:id', CoursesControllers.getOne);
//trae todos los registros de la BD
route.get('/next_courses/getAll', CoursesControllers.getAll);
route.patch('/next_courses/update/:id', CoursesControllers.update);
route.delete('/next_courses/detele/:id', CoursesControllers.delete);

export default route;*/
import { Router } from 'express';
import courses from '../controllers/courses.controllers.js';
const router = Router();

router.get('/trainingpro/v1/courses/all-courses', courses.allCourses);

export {router};