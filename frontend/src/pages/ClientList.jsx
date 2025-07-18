import { useEffect, useState } from 'react';

export default function ClientsList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/clients')
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

  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-600">Erreur : {error}</p>;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Liste des clients</h2>
      <ul className="space-y-4">
        {clients.map(({ id, entreprise, nom, prenom, email, telephone, commentaire }) => (
          <li key={id} className="border-b pb-4 last:border-b-0">
            <div className="font-semibold text-lg text-gray-900">
              {nom}{prenom && ` ${prenom}`}
            </div>
            {entreprise && <div className="text-gray-700">Entreprise : <span className="font-medium">{entreprise}</span></div>}
            {email && <div className="text-gray-700">Email : <span className="font-medium">{email}</span></div>}
            {telephone && <div className="text-gray-700">Téléphone : <span className="font-medium">{telephone}</span></div>}
            {commentaire && <div className="text-gray-500 italic">Commentaire : {commentaire}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
