import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header-bg header-padding" style={{ backgroundColor: 'red' }}>
        <nav className="header-container header-flex header-gap header-align">
            <Link to="/" className="header-btn header-btn-primary header-fw-bold">
                Accueil
            </Link>
            <Link to="/ajout-client" className="header-btn header-btn-outline">
                Ajouter un client
            </Link>
            <Link to="/liste-clients" className="header-btn header-btn-outline">
                Liste des clients
            </Link>
            <Link to="/statistiques" className="header-btn header-btn-outline">
                Statistiques
            </Link>
        </nav>
    </header>
);

export default Header;