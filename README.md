# Creaphere — Backend

## Objectif

API REST du site vitrine Creaphere, artisane graveuse sur verre.
Elle fournit les créations affichées dans la galerie, les techniques présentées sur l'accueil, et reçoit les messages du formulaire de contact.

## Stack technique

- **Node.js** ≥ 18
- **Express 5** (framework HTTP)
- **MongoDB** + Mongoose (base de données)

## Prérequis

- **Node.js** > 18
- **MongoDB** > 7

### Démarrer MongoDB

Le serveur refise de démarrer si la base n'est pas joignable : MongoDB doit tourner **avant** `npm run dev`

| Système                    | Installation                                                                                                  | Démarrer                                                  | Arrêter                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------- |
| **macOS**                  | `brew tap mongodb/brew` puis `brew install mongodb-community`                                                 | `brew services start mongodb-community`                   | `brew services stop mongodb-community` |
| **Windows**                | Installeur `.msi` officiel, en cochant _Install MongoD as a Service_                                          | Automatique (sinon `net start MongoDB` en administrateur) | `net stop MongoDB`                     |
| **Linux (Ubuntu/Debian)**  | Paquet `mongodb-org` ([guide officiel](https://www.mongodb.com/docs/manual/administration/install-on-linux/)) | `sudo systemctl start mongod`                             | `sudo systemctl stop mongod`           |
| **Docker** (tous systèmes) | —                                                                                                             | `docker run -d --name mongo -p 27017:27017 mongo:7`       | `docker stop mongo`                    |

Vérifier que MongoDB répond :

```bash
mongosh --eval "db.runCommand({ ping: 1})"
```

La réponse doit contenir `ok: 1`.

## Installation

1. Cloner le repo :
   ```bash
   git clone <url-du-repo>
   cd creaphere-backend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Copier `.env.example` en `.env` et renseigner les valeurs :
   ```bash
   cp .env.example .env
   ```
4. Lancer le serveur en développement :
   ```bash
   npm run dev
   ```

## Scripts disponibles

| Script        | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `npm run dev` | Lance le serveur avec nodemon (redémarrage automatique à chaque modification) |
| `npm start`   | Lance le serveur avec Node (usage production)                                 |

## Librairies utilisées

| Librairie         | À quoi elle sert                                                      |
| ----------------- | --------------------------------------------------------------------- |
| `express`         | Framework serveur HTTP / routing de l'API                             |
| `dotenv`          | Chargement des variables d'environnement depuis `.env`                |
| `nodemon` _(dev)_ | Redémarre le serveur automatiquement à chaque modification de fichier |
| `cors`            | Autorise les requêtes cross-origin depuis le frontend                 |
| `morgan`          | Logger HTTP (affiche les requêtes en console)                         |
| `mongoDB`         | ODM pour interagir avec MongoDB.                                      |

## Structure du projet

```
creaphere-backend/
├── src/
│   ├── config/        # Configuration (connexion BDD, services externes)
│   ├── controllers/   # Logique métier de chaque route
│   ├── models/        # Schémas Mongoose
│   ├── routes/        # Déclaration des routes Express
│   ├── middlewares/   # Middlewares (erreurs, validation, auth)
│   ├── utils/         # Fonctions utilitaires (mailer, upload…)
│   └── app.js         # Création et configuration de l'app Express
├── server.js          # Point d'entrée : charge l'env et démarre le serveur
├── .env.example       # Modèle des variables d'environnement
├── CONTRIBUTING.md
└── README.md
```

## Contribuer

Les conventions de branches, de commits et de Pull Requests sont décrites dans [CONTRIBUTING.md](./CONTRIBUTING.md).
