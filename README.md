# Projet: Boutique_en_ligne

## Description:

Ce projet est une boutique en ligne complète permettant aux utilisateurs de naviguer, acheter des produits et passer des commandes. Les administrateurs ont un accès étendu pour gérer les produits, catégories et commandes. L'application utilise une architecture API RESTful, avec une gestion des utilisateurs via JWT pour l'authentification et la gestion des droits d'accès. Les données sont stockées dans une base de données relationnelle, assurant une gestion robuste des informations.

## Membres

- Axel Pineau = bigcataxel
- Michael Yaghi = Mikee-hub
- Ahmed Moumni = Ahmedmoumni1712

## Fonctionnalités

- **Routes API (Axel Pineau)**
  - Création des routes pour les produits, catégories et commandes.
  - Mise en place de la logique métier pour ajouter, modifier, supprimer et récupérer des données.

- **Requêtes HTTP & Débogage (Ahmed Moumni)**
  - Développement et débogage des requêtes HTTP (GET, POST, DELETE) pour chaque ressource.
  - Gestion des erreurs et amélioration des middlewares pour l'authentification et l'autorisation.

- **Modèles de Base de Données (Michael Yaghi)**
  - Conception des modèles de données avec Sequelize.
  - Définition des relations entre utilisateurs, produits, catégories et commandes.
  - Mise en place des migrations pour gérer la création et les mises à jour de la base de données.
