
//const mongo = require('../databases/mongo.connection.js');

import mongo from '../databases/mongo.connection.js';

const client = await mongo.connectToMongo();
const close = await mongo.closeClient();

const mydb = 'cranunate';

export default {

  allCourses: async (req, res) => {
    let result = [];
    try {
      const db = client.db(mydb);
      const collection = db.collection('courses');  // No es necesario pasar 'collectionName', ya que estamos trabajando con 'courses' directamente.
      result = await collection.find({}).toArray();  // Recupera todos los cursos
      res.json(result);  // Enviar la respuesta con los cursos
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un problema al obtener los cursos' });  // Manejo de errores
    }
  }
};


/*
class coursesControllers {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ status: "create--ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
        res.status(201).json({ status: "update--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async delete(req, res) {
    try {
        res.status(201).json({ status: "delete--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async getAll(req, res) {
    try {
        res.status(201).json({ status: "getAll--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async getOne(req, res) {
    try {
        res.status(201).json({ status: "getOne--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

}

export default new coursesControllers();
*/