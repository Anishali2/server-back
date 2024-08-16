import mongoose from "mongoose";

import logger from "../utils/winston";

export const db_connect = async () => {
  const MONGODB_URI: string =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sales";

  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongodb connection error : ${error}`);
    logger.error(`mongodb connection error: ${error}`);
    process.exit(1);
  }
};
