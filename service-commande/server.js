const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://mongo/service-commande', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Modèle de commande
const Commande = mongoose.model('Commande', new mongoose.Schema({
    produitId: String,
    utilisateurId: String,
    quantite: Number,
    date: { type: Date, default: Date.now }
}));

// Routes
app.post('/commandes', async (req, res) => {
    const commande = new Commande(req.body);
    await commande.save();
    res.status(201).send(commande);
});

app.get('/commandes/:id', async (req, res) => {
    const commande = await Commande.findById(req.params.id);
    if (!commande) return res.status(404).send('Commande non trouvée');
    res.send(commande);
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Service de commande en écoute sur le port ${PORT}`);
});
