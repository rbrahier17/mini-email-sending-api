import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GMAIL_ADDRESS || !process.env.GMAIL_PASSWORD) {
  throw new Error("Assurez vous d'avoir un fichier .env avec les variables GMAIL_ADDRESS et GMAIL_PASSWORD");
}

const app = express();
const PORT = 3000;

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Endpoint principal pour envoyer les emails
app.post("/send-email", async (req: express.Request, res: express.Response): Promise<void> => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    res.status(400).send("Tous les champs (to, subject, text) sont obligatoires.");
    return;
  }

  try {
    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: "Anthroquiz",
      to,
      subject,
      text,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email :", error);
    res.status(500).send("Erreur lors de l’envoi de l’email.");
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
