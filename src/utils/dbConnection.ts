import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

async function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log("Using cached connection");
    return mongoose.connections[0];
  }

  console.log("Creating new connection");
  return mongoose.connect(MONGO_URI);
}
export default dbConnect;
