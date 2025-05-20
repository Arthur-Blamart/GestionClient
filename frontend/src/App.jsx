import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

import Header from './includes/Header';

import Acceuil from './pages/Acceuil';

import AddClientForm from './pages/AddClientForm';
import ClientsList from './pages/ClientList';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/ajout-client" element={<AddClientForm />} />
      <Route path="/liste-clients" element={<ClientsList />} />
    </Routes>
  )
}

export default App