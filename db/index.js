const mongoose = require("mongoose");

async function connectDb() {
  try {
    const { MONGODB_URL } = process.env;
    const { connection } = await mongoose.connect(MONGODB_URL);
    console.log(`Connected to DB: ${connection.name}`);
  } catch (err) {
    console.error(`Error connecting to DB: ${err.message}`);
  }
}

module.exports = { connectDb };
