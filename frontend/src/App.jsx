import { Routes, Route } from "react-router-dom";
import Header from './includes/Header';
import Footer from './includes/Footer';

import Acceuil from './pages/Acceuil';
import AddClientForm from './pages/AddClientForm';
import ClientsList from './pages/ClientList';

function App() {
  return (
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
  )
}

export default App