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
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Ajouter un client</h2>
      <div className="form-group">
        <label className="form-label-custom">Entreprise</label>
        <input
          type="text"
          className="form-input"
          placeholder="Entreprise"
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label-custom">Nom</label>
        <input
          type="text"
          className="form-input"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label-custom">Prénom</label>
        <input
          type="text"
          className="form-input"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label-custom">Email</label>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label-custom">Téléphone</label>
        <input
          type="tel"
          className="form-input"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label-custom">Commentaire</label>
        <textarea
          className="form-input"
          placeholder="Commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
        />
      </div>
      <button type="submit" className="form-btn">Ajouter</button>
      {message && <div className="form-alert">{message}</div>}
    </form>
  );
}
