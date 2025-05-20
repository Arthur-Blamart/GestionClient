import { useState } from 'react'
import './App.css'
import AddClientForm from './AddClientForm';
import ClientsList from './ClientList';

function App() {

  return (
    <>
      <div>
        <h1>Mon Application Client</h1>
        <AddClientForm />
        <h2>Liste des clients</h2>
        <ClientsList />
      </div>
    </>
  )
}

export default App