import { MongoClient } from 'mongodb'

class Connection {
  private mongoClient: MongoClient;

  constructor() {}

  async initConnection(uri: string): Promise<void> {
		this.mongoClient = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
    });
  }
  
  async disconnect(): Promise<void> {
		await this.mongoClient.close();
  }

  async getConnection(): MongoClient {
    return this.mongoClient;
  }
  
}

export default new Connection();
