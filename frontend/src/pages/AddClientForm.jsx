import { useState } from 'react';

export default function AddClientForm() {
  const [entreprise, setEntreprise] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientData = {
      entreprise,
      nom,
      prenom: prenom || null,
      email: email || null,
      telephone: telephone || null,
      commentaire: commentaire || null
    };

    const response = await fetch('http://localhost:3000/clients/addClient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clientData)
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(`Client ajouté avec l'ID ${data.id}`);
      setEntreprise('');
      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setCommentaire('');
    } else {
      setMessage(data.error || "Erreur lors de l'ajout");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Ajouter un client</h2>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Entreprise</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Entreprise"
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Nom</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Prénom</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Email</label>
        <input
          type="email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Téléphone</label>
        <input
          type="tel"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Commentaire</label>
        <textarea
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-gray-800 text-white font-semibold py-2 rounded hover:bg-gray-700 transition"
      >
        Ajouter
      </button>
      {message && (
        <div className="mt-3 text-center text-sm text-green-600 bg-green-100 rounded p-2">
          {message}
        </div>
      )}
    </form>
  );
}
