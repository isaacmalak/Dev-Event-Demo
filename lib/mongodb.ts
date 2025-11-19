// lib/mongodb.ts

import mongoose, { Connection } from "mongoose";

/**
 * A global cache interface to track the Mongoose connection across hot reloads.
 * Next.js (dev mode) reloads modules often, so without caching, multiple
 * connections would be created. This prevents that.
 */
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Extend the global object type to store the cached connection.
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseCache | undefined;
}

// Initialize the global cache if it doesn't exist.
const cached: MongooseCache = global._mongoose || {
  conn: null,
  promise: null,
};

// Save it to the global object to persist across reloads.
global._mongoose = cached;

/**
 * Connect to MongoDB using Mongoose, with caching to avoid
 * creating multiple connections in development.
 */
export async function connectToDatabase(): Promise<Connection> {
  // If already connected, return the existing connection.
  if (cached.conn) {
    return cached.conn;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables.");
  }

  // If no existing connection promise, create one.
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        // best-practice options (Mongoose 7+)
        dbName: process.env.MONGODB_DB_NAME, // optional, use if you set DB name separately
      })
      .then((mongooseInstance) => mongooseInstance.connection)
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }

  // Wait for the connection to resolve.
  cached.conn = await cached.promise;
  return cached.conn;
}
