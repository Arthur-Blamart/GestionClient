import React from 'react';

const Footer = () => (
    <footer className="footer-bg footer-padding footer-mt" style={{ backgroundColor: 'red' }}>
        <div className="footer-container footer-text-center footer-text-light">
            <div>
                Contact : <a href="mailto:arthurblamart@gmail.com" className="footer-link">arthurblamart@gmail.com</a>
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
