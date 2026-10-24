require("dotenv").config({ quiet: true });

const checkEnv = require("./src/config/env");
checkEnv();

const connectDB = require("./src/config/db");
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
}

startServer();
