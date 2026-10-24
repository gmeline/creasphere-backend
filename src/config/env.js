const REQUIRED_VARS = ["DB_URI"];

function checkEnv() {
  const missing = REQUIRED_VARS.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    console.error(
      `Variable(s) d'environnement manquante(s) : ${missing.join(", ")}`,
    );
    console.error("Copie .env.example en .env et renseigne les valeurs.");
    process.exit(1);
  }
}

module.exports = checkEnv;
