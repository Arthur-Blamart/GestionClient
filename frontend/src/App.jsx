import { Routes, Route } from "react-router-dom";

import Acceuil from './pages/Acceuil';
import AddClientForm from './pages/AddClientForm';
import ClientsList from './pages/ClientList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4">
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/ajout-client" element={<AddClientForm />} />
        <Route path="/liste-clients" element={<ClientsList />} />
      </Routes>
    </div>
  )
}

export default App