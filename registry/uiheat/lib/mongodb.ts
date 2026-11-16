import { MongoClient, type Db } from "mongodb";

/**
 * Shared MongoDB client for Next.js (App Router or Pages, Node runtime).
 *
 * Env:
 *   MONGODB_URI        required
 *   MONGODB_DB         database name used by getDb() (default: the one in the URI)
 *   MONGODB_POOL_SIZE  max connections per instance (default 10)
 *
 * Each serverless instance gets its own client, so an unbounded pool multiplies
 * across concurrent invocations and can exhaust a small Atlas tier's limit.
 */

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not set. Add it to .env.local.");
}

const options = {
  maxPoolSize: Number(process.env.MONGODB_POOL_SIZE ?? 10),
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Reuse the client across hot reloads so dev doesn't leak connections.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri, options).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri, options).connect();
}

export default clientPromise;

export async function getDb(name = process.env.MONGODB_DB): Promise<Db> {
  const client = await clientPromise;
  return client.db(name);
}
