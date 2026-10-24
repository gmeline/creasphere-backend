require("dotenv").config({ quiet: true });

const checkEnv = require("./src/config/env");
checkEnv();

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
