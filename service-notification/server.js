const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configuration du transporteur
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vousremail@gmail.com',
        pass: 'votremotdepasse'
    }
});

app.post('/notification', (req, res) => {
    const { email, message } = req.body;
    const mailOptions = {
        from: 'vousremail@gmail.com',
        to: email,
        subject: 'Notification de Commande',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).send(error);
        res.status(200).send('Notification envoyée');
    });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Service de notification en écoute sur le port ${PORT}`);
});
