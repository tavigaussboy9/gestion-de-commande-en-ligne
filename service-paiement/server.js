const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulation d'un service de paiement
app.post('/paiement', (req, res) => {
    // Logique de traitement des paiements
    const { montant, commandeId } = req.body;
    console.log(`Traitement du paiement de ${montant} pour la commande ${commandeId}`);
    res.status(200).send({ message: 'Paiement traité avec succès' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Service de paiement en écoute sur le port ${PORT}`);
});
