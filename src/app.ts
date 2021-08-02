import { MongoClient } from "mongodb";

async function start() {
  const uri = 'mongodb+srv://fayyoz:fayyoz@cluster0.5hihm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  const client = new MongoClient(uri);

  try {
    await client.connect();
        
  } catch (error) {
    console.error(error);
    
  } finally {
    await client.close();
  }
}

start().catch(console.error);