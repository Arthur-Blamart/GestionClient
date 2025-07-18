module.exports = {
  openapi: "3.0.0",
  info: {
    title: "API Gestion Clients",
    version: "1.0.0",
    description: "API REST pour gérer les clients",
  },
  servers: [
    { url: "http://localhost:3000" }
  ],
  paths: {
    "/clients": {
      post: {
        summary: "Ajouter un client",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  entreprise: { type: "string", example: "ACME Corp" },
                  nom: { type: "string", example: "Dupont" },
                  prenom: { type: "string", example: "Jean" },
                  email: { type: "string", example: "jean.dupont@acme.com" },
                  telephone: { type: "string", example: "+33612345678" },
                  commentaire: { type: "string", example: "Client fidèle, à relancer en septembre." }
                },
                required: ["nom", "email"]
              },
              example: {
                entreprise: "ACME Corp",
                nom: "Dupont",
                prenom: "Jean",
                email: "jean.dupont@acme.com",
                telephone: "+33612345678",
                commentaire: "Client fidèle, à relancer en septembre."
              }
            }
          }
        },
        responses: {
          201: {
            description: "Client ajouté",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "integer" },
                    entreprise: { type: "string" },
                    nom: { type: "string" },
                    prenom: { type: "string" },
                    email: { type: "string" },
                    telephone: { type: "string" },
                    commentaire: { type: "string" }
                  }
                }
              }
            }
          },
          400: { description: "Nom et email sont requis" },
          500: { description: "Erreur serveur" }
        }
      },
      get: {
        summary: "Récupérer la liste des clients",
        responses: {
          200: {
            description: "Liste des clients",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "integer" },
                      entreprise: { type: "string" },
                      nom: { type: "string" },
                      prenom: { type: "string" },
                      email: { type: "string" },
                      telephone: { type: "string" },
                      commentaire: { type: "string" }
                    }
                  }
                }
              }
            }
          },
          500: { description: "Erreur serveur" }
        }
      }
    }
  }
};
