# Frontend – Gestion Clients

Ce frontend est une application React développée avec Vite. Il permet d’interfacer une API REST pour gérer une liste de clients (ajout, affichage, etc.). L’interface utilisateur est entièrement stylisée avec [Tailwind CSS](https://tailwindcss.com/).

## Structure du projet

```
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── main.css
│   ├── includes/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── Acceuil.jsx
│       ├── AddClientForm.jsx
│       └── ClientList.jsx
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Installation

> **Ce projet est destiné à un usage de développement.**

1. Placez-vous dans le dossier `frontend/` :
   ```sh
   cd frontend
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

## Utilisation

Pour lancer l’application en mode développement :

```sh
npm run dev
```

L’interface sera accessible sur [http://localhost:5173](http://localhost:5173).

L’application consomme l’API REST exposée par le backend (par défaut sur [http://localhost:3000](http://localhost:3000)).

## Style

Le style de l’interface est entièrement géré avec [Tailwind CSS](https://tailwindcss.com/).  
Vous pouvez personnaliser le design en modifiant les classes utilitaires dans les fichiers JSX.

---
Ce frontend permet d’ajouter, de consulter et de gérer les clients via une interface moderne et responsive.
