import React from 'react';

const Footer = () => (
    <footer className="bg-dark py-3 mt-auto">
        <div className="container text-center text-light">
            <div>
                Contact : <a href="mailto:arthurblamart@gmail.com" className="text-light">arthurblamart@gmail.com</a>
            </div>
            <div>
                &copy; {new Date().getFullYear()} Gestion Clients
            </div>
            <div>
                Tous droits réservés.
            </div>
        </div>
    </footer>
);

export default Footer;
