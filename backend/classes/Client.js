class Client{
    #id = -1; // Identifiant unique du client (-1 par défaut)

    /**
     * Crée une instance de Client.
     * @param {string} entreprise - Le nom de l'entreprise du client.
     * @param {string} nom - Le nom de famille du client.
     * @param {string|null} [prenom=null] - Le prénom du client (facultatif).
     * @param {string|null} [email=null] - L'adresse email du client (facultatif).
     * @param {string|null} [telephone=null] - Le numéro de téléphone du client (facultatif).
     * @param {string|null} [commentaire=null] - Un commentaire sur le client (facultatif).
     */
    constructor(entreprise, nom, prenom=null, email=null, telephone=null, commentaire=null){
        this.entreprise = entreprise;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.commentaire = commentaire;
    }
}
