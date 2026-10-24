const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connecté : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Impossible de se connecter à MongoDB : ${err.message}`);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error(`Erreur MongoDB : ${err.message}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB déconnecté");
  });
}

module.exports = connectDB;
