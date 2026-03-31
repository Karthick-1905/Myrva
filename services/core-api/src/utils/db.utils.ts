import { db } from "../config/db";

export const checkDB = async () => {
  try {
    await db.execute("SELECT 1");
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection failed", err);
    process.exit(1);
  }
};