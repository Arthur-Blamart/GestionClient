import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-gray-800 shadow">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
            <div className="text-white text-2xl font-bold tracking-wide">
                Gestion Clients
            </div>
            <div className="flex gap-3">
                <Link to="/">
                    <button className="px-4 py-2 rounded font-bold text-white bg-gray-900 hover:bg-gray-700 transition">
                        Accueil
                    </button>
                </Link>
                <Link to="/ajout-client">
                    <button className="px-4 py-2 rounded font-bold text-white bg-gray-900 hover:bg-gray-700 transition">
                        Ajouter un client
                    </button>
                </Link>
                <Link to="/liste-clients">
                    <button className="px-4 py-2 rounded font-bold text-white bg-gray-900 hover:bg-gray-700 transition">
                        Liste des clients
                    </button>
                </Link>
                <Link to="/statistiques">
                    <button className="px-4 py-2 rounded font-bold text-white bg-gray-900 hover:bg-gray-700 transition">
                        Statistiques
                    </button>
                </Link>
            </div>
        </nav>
    </header>
);

export default Header;