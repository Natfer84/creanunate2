import { MongoClient } from 'mongodb';

let client;

export default {

  connectToMongo: async () => {
    if (!client) {
      client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
    return client;
  },
  
  closeClient: async () => {
    if (client) {
      await client.close();
    }
  }
}
