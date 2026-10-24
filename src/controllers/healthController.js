function getHealth(req, res) {
  res.status(200).json({
    status: "ok", //Envoie le code 200 et le JSON
    uptime: Math.floor(process.uptime()), // Donne le nombre de seconde depuis le démarrage du server avec un arrondi à l'entier
    timestamp: new Date().toISOString(), // Donne la date et l'heure actuelle au format ISO
  });
}
module.exports = {
  getHealth,
};
