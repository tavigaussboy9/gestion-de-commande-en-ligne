const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo/service-stock', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

const Produit = mongoose.model('Produit', new mongoose.Schema({
    nom: String,
    prix: Number,
    quantite: Number
}));

app.post('/produits', async (req, res) => {
    const produit = new Produit(req.body);
    await produit.save();
    res.status(201).send(produit);
});

app.get('/produits', async (req, res) => {
    const produits = await Produit.find();
    res.send(produits);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Service de stock en écoute sur le port ${PORT}`);
});
