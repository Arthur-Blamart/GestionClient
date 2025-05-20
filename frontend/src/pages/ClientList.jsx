import { useEffect, useState } from 'react';

export default function ClientsList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/clients/getClients')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors du chargement');
        return res.json();
      })
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Liste des clients</h2>
      <ul>
        {clients.map(({ id, entreprise, nom, prenom, email, telephone, commentaire }) => (
          <li key={id}>
            <strong>{nom}</strong>
            {prenom && ` ${prenom}`}<br />
            {entreprise && <>Entreprise : {entreprise}<br /></>}
            {email && <>Email : {email}<br /></>}
            {telephone && <>Téléphone : {telephone}<br /></>}
            {commentaire && <>Commentaire : {commentaire}<br /></>}
          </li>
        ))}
      </ul>
    </div>
  );
}
