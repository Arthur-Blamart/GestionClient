const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const swaggerUI = require("swagger-ui-express");

const app = express();

const swaggerSpec = require("./swagger");
const port = process.env.PORT || 3000;

// Middleware pour autoriser les requêtes cross-origin et parser le JSON
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

// Connexion à la base de données SQLite (fichier clients.db)
const db = new sqlite3.Database('clients.db');

// Création de la table clients si elle n'existe pas déjà
db.run(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entreprise TEXT,
    nom TEXT,
    prenom TEXT,
    email TEXT NOT NULL,
    telephone TEXT,
    commentaire TEXT
  )
`);

// Route POST pour ajouter un client
app.post('/clients/addClient', (req, res) => {
  const { entreprise, nom, prenom, email, telephone, commentaire } = req.body;

  // Vérification des champs requis
  if (!nom || !email) {
    return res.status(400).json({ error: 'Nom et email sont requis' });
  }

  // Insertion du client dans la base de données avec tous les champs
  const query = `
    INSERT INTO clients (entreprise, nom, prenom, email, telephone, commentaire)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.run(query, [entreprise, nom, prenom, email, telephone, commentaire], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Retourne l'id du client ajouté et les infos principales
    res.status(201).json({ id: this.lastID, entreprise, nom, prenom, email, telephone, commentaire });
  });
});

// Route GET pour récupérer la liste des clients
app.get('/clients/getClients', (req, res) => {
  const query = 'SELECT * FROM clients';
  db.all(query, function (err, rows) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Retourne la liste des clients
    res.json(rows);
  });
});

// Démarrage du serveur sur le port 3000
app.listen(port, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${port}`);
});
