# Mini API d'envoi d'emails

Une API Express pour envoyer des emails via Gmail avec Nodemailer.

## Configuration

1. Clonez le dépôt.
2. Installez les dépendances : `npm install`
3. Créez un fichier `.env` à partir de `.env.sample`.

## Démarrer le serveur

Exécutez `npm start` (le serveur fonctionne sur http://localhost:3000).

## Utilisation

Envoyez une requête POST à `/send-email` avec le corps suivant par exemple :
```json
{
  "to": "destinataire@example.com",
  "subject": "Sujet",
  "html": "Contenu"
}
```