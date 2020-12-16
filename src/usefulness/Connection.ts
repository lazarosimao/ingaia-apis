import { Collection, MongoClient } from 'mongodb'

class Connection {
  private mongoClient: MongoClient;

  async initConnection(uri: string): Promise<void> {
		this.mongoClient = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
    });
  }
  
  async disconnect(): Promise<void> {
		await this.mongoClient.close();
  }

  getCollection(name: string): Collection {
		return this.mongoClient.db().collection(name)
  }
  
  getConnection(): MongoClient {
    return this.mongoClient;
  }
  
}

export default new Connection();
