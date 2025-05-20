# Projet de Gestion Client

Ce projet est une application web permettant de gérer une liste de clients pour une entreprise. Il est structuré en deux parties : un backend Node.js/Express avec une base de données SQLite, et un frontend React utilisant Vite.

## Structure du projet

```
gestionClients/
├── backend/      📦 Serveur Express + base SQLite
│   ├── index.js
│   ├── clients.db
│   ├── package.json
│   └── classes/
│       └── Client.js
├── frontend/     💻 Application React (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── App.css
│   │   └── clients/
│   │       ├── AddClientForm.jsx
│   │       └── ClientList.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── public/
│       └── vite.svg
├── package.json      # Script global (npm run install, npm run dev)
├── .gitignore
└── README.md
```

## Installation

> **Attention : ce projet est destiné uniquement à un usage de développement et ne doit pas être utilisé en production.**

> **Vous pouvez installer indépendamment chaque partie du projet**

Pour installer toutes les dépendances nécessaires au fonctionnement du projet, utilisez la commande suivante à la racine du projet :

```sh
npm run install
```

Ce script installera les dépendances pour le backend et le frontend.

## Fonctionnalités

- **Backend** : API REST pour ajouter et lister les clients (stockés en SQLite).
- **Frontend** : Interface utilisateur pour ajouter des clients via un formulaire.

## Lancement

Vous pouvez lancer simultanément le backend et le frontend avec la commande suivante à la racine du projet :

```sh
npm run dev
```

Ce script démarre automatiquement le serveur Express (backend) et l’application React (frontend).

> L’application sera accessible sur [http://localhost:5173](http://localhost:5173) (frontend) et l’API sur [http://localhost:3000](http://localhost:3000) (backend).