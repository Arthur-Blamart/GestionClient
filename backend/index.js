const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('clients.db');

db.run(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`);

app.post('/clients', (req, res) => {
  const { nom, email } = req.body;

  if (!nom || !email) {
    return res.status(400).json({ error: 'Nom et email sont requis' });
  }

  const query = 'INSERT INTO clients (nom, email) VALUES (?, ?)';
  db.run(query, [nom, email], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ id: this.lastID, nom, email });
  });
});

app.listen(port, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${port}`);
});
