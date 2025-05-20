import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark py-3">
        <nav className="container d-flex gap-3 align-items-center">
            <Link to="/" className="btn btn-primary fw-bold">
                Accueil
            </Link>
            <Link to="/ajout-client" className="btn btn-outline-light">
                Ajouter un client
            </Link>
            <Link to="/liste-clients" className="btn btn-outline-light">
                Liste des clients
            </Link>
            <Link to="/statistiques" className="btn btn-outline-light">
                Statistiques
            </Link>
        </nav>
    </header>
);

export default Header;