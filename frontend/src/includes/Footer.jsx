import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 py-6 mt-auto">
        <div className="container mx-auto text-center text-white">
            <div>
                Contact : <a href="mailto:arthurblamart@gmail.com" className="underline hover:text-gray-300">arthurblamart@gmail.com</a>
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
