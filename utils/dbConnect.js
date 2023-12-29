// utils/dbConnect.js

import mongoose from 'mongoose';

async function dbConnect() {
  await mongoose.connect(process.env.MONGODB_URI);
}

export default dbConnect;
