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

    console.log(clientData);

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
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un client</h2>
      <input
        type="text"
        placeholder="Entreprise"
        value={entreprise}
        onChange={(e) => setEntreprise(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <textarea
        placeholder="Commentaire"
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
      />
      <button type="submit">Ajouter</button>
      {message && <p>{message}</p>}
    </form>
  );
}
