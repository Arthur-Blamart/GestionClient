import React from 'react';

export default function Acceuil(){
    return (
        <div className="toChange1">
            <div className="toChange2">
                <h1 className="toChange3">Bienvenue sur la Gestion des Clients</h1>
                <p className="toChange4">
                    Cette application vous permet de gérer facilement vos clients et leurs informations.
                </p>
                <hr className="toChange5" />
                <p>
                    Utilisez le menu pour naviguer entre les différentes fonctionnalités.
                </p>
                <a className="toChange6" href="/clients" role="button">
                    Voir la liste des clients
                </a>
            </div>
        </div>
    );
}