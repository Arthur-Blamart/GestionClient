import React from 'react';

export default function Acceuil() {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                Bienvenue sur la Gestion des Clients
            </h1>
            <p className="text-gray-600 mb-6 text-center">
                Cette application vous permet de gérer facilement vos clients et leurs informations.
            </p>
            <hr className="w-1/2 border-gray-300 mb-6" />
            <p className="text-gray-500 mb-8 text-center">
                Utilisez le menu pour naviguer entre les différentes fonctionnalités.
            </p>
            <a
                href="/liste-clients"
                className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition"
            >
                Voir la liste des clients
            </a>
        </div>
    );
}