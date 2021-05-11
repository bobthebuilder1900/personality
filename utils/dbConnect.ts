import { MongoClient } from "mongodb";
import { getDbConnectionString } from "./mongoose";

async function connectDb() {
  const connectionString = getDbConnectionString();

  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();

    return db;
  } catch (error) {
    console.error({
      error,
    });
    throw new Error("Unable to instantiate DB connection");
  }
}

export default connectDb;
