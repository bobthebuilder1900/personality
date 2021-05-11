import mongoose from "mongoose";

export const getDbConnectionString = (): string => {
  let connectionString =
    "mongodb+srv://live:superstrongpassword@cluster0.dfmc8.mongodb.net/questions?retryWrites=true&w=majority";

  if (!connectionString) {
    throw new Error("MongoDB connection string has not been set!");
  }

  return connectionString;
};

/**
 * Sets up a new connection to MongoDB, or returns the active one. Check the official example here
 * https://github.com/vercel/next.js/blob/master/examples/with-mongodb-mongoose/utils/dbConnect.js
 */
async function connect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const connectionString = getDbConnectionString();

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

/**
 * A wrapper method to ensure an active database connection has been established.
 * @param queryHandler Your query method called upon active database connection.
 */
export const withConnection = <T extends Array<any>, U>(
  queryHandler: (...args: T) => Promise<U>
) => {
  return (...args: T): Promise<U> =>
    connect().then(() => queryHandler(...args));
};
