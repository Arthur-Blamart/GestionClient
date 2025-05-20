# Projet de Gestion Client

Ce projet est une application web permettant de gérer une liste de clients pour une entreprise. Il est structuré en deux parties : un backend Node.js/Express avec une base de données SQLite, et un frontend React utilisant Vite.

## Structure du projet

```
gestionClients/
├── backend/      # Serveur Express + base SQLite
│   ├── index.js
│   ├── clients.db
│   ├── package.json
│   └── classes/
│       └── Client.js
└── frontend/     # Application React (Vite)
    ├── src/
    │   ├── App.jsx
    │   ├── AddClientForm.jsx
    │   └── ...
    ├── index.html
    ├── package.json
    └── ...
```

## Fonctionnalités

- **Backend** : API REST pour ajouter et lister les clients (stockés en SQLite).
- **Frontend** : Interface utilisateur pour ajouter des clients via un formulaire.

## Lancement

1. **Backend** :  
   Dans le dossier `backend/` :
   ```sh
   npm install
   node index.js
   ```

2. **Frontend** :  
   Dans le dossier `frontend/` :
   ```sh
   npm install
   npm run dev
   ```

L’application sera accessible sur [http://localhost:5173](http://localhost:5173) (frontend) et l’API sur [http://localhost:3000](http://localhost:3000) (backend).