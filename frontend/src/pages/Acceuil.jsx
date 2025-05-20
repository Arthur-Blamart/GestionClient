import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Acceuil(){
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center bg-light p-5 rounded">
                <h1 className="display-4">Bienvenue sur la Gestion des Clients</h1>
                <p className="lead">
                    Cette application vous permet de gérer facilement vos clients et leurs informations.
                </p>
                <hr className="my-4" />
                <p>
                    Utilisez le menu pour naviguer entre les différentes fonctionnalités.
                </p>
                <a className="btn btn-primary btn-lg" href="/clients" role="button">
                    Voir la liste des clients
                </a>
            </div>
        </div>
    );
}