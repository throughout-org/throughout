import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

let cached = (global as any).mongoose;
if (!cached) cached = (global as any).mongoose = { conn: null };

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  try {
    cached.conn = await mongoose.connect(MONGODB_URI, {
      // These options help with SSL issues
      retryWrites: true,
      w: "majority",
    });
    return cached.conn;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
