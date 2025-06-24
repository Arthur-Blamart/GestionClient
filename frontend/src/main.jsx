import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.css';

import App from './App.jsx'
import Header from './includes/Header.jsx'
import Footer from './includes/Footer.jsx';
import Acceuil from './pages/Acceuil';
import AddClientForm from './pages/AddClientForm';
import ClientsList from './pages/ClientList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/ajout-client" element={<AddClientForm />} />
            <Route path="/liste-clients" element={<ClientsList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
