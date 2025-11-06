# Gestion de Commande en Ligne

Bienvenue dans le projet **Gestion de Commande en Ligne** ! Ce système utilise une architecture de microservices pour gérer les commandes, les paiements et les stocks.

## Fonctionnalités
- **Commande de produits** : Les utilisateurs peuvent parcourir et commander des produits facilement.
- **Gestion des paiements** : Intégration avec plusieurs passerelles de paiement sécurisées.
- **Gestion des stocks** : Suivi des niveaux de stock en temps réel.
- **Notification** : Envoi de notifications par e-mail/SMS lors de l'état des commandes.

## Architecture
Le système est divisé en plusieurs microservices :
1. **Service de Commande** : Gère l'historique des commandes.
2. **Service de Paiement** : Traite les paiements et les remboursements.
3. **Service de Stock** : Gère les produits et les niveaux de stock.
4. **Service de Notification** : Envoie des notifications aux utilisateurs.

## Technologies utilisées
- Node.js
- Docker
- MongoDB
- RabbitMQ
- React

## Installation
1. Clonez le dépôt.
2. Installez les dépendances des services.
3. Configurez les variables d'environnement.
4. Lancez les services avec Docker Compose.

## Contribuer
Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.

## License
Ce projet est sous la licence MIT.
