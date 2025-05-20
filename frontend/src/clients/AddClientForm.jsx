import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded shadow-sm bg-light" style={{maxWidth: 500}}>
      <h2 className="mb-4">Ajouter un client</h2>
      <div className="mb-3">
        <label className="form-label">Entreprise</label>
        <input
          type="text"
          className="form-control"
          placeholder="Entreprise"
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Prénom</label>
        <input
          type="text"
          className="form-control"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Téléphone</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Commentaire</label>
        <textarea
          className="form-control"
          placeholder="Commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Ajouter</button>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </form>
  );
}
