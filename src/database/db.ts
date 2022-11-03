import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';
import { dbConnectionCache } from './dbConnection';

// const MONGODB_URI = "mongodb+srv://grouptu:bd123@cluster0.l2z51d0.mongodb.net/roxipa";
const errorMessage = 'Please define the MONGODB_URL environment variable';

declare global {
  var mongoose: dbConnectionCache;
}

let cached: dbConnectionCache = global.mongoose!;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(MONGODB_URI: string) {
  if (!MONGODB_URI) {
    throw new Error(errorMessage);
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log('Connected to MongoDB');
  return cached.conn;
}

export default dbConnect;
