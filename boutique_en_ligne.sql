-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 22 déc. 2024 à 18:40
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `boutique_en_ligne`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Électronique', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(2, 'Vêtements', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(3, 'Maison', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(4, 'Livres', '2024-12-22 12:57:22', '2024-12-22 12:57:22');

-- --------------------------------------------------------

--
-- Structure de la table `commands`
--

CREATE TABLE `commands` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `totalPrice` decimal(10,0) NOT NULL,
  `status` enum('PENDING','SHIPPED','DELIVERED') DEFAULT 'PENDING',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commands`
--

INSERT INTO `commands` (`id`, `userId`, `totalPrice`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 720, 'PENDING', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(2, 2, 515, 'SHIPPED', '2024-12-22 12:57:22', '2024-12-22 12:57:22');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `createdAt`, `updatedAt`) VALUES
(6, 'Test Product', 19.99, 'Description of test product', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'New Product', 29.99, 'A new amazing product', '2024-12-22 16:40:39', '2024-12-22 16:40:39'),
(9, 'First Product', 19.99, 'The first amazing product', '2024-12-22 17:29:54', '2024-12-22 17:29:54');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `activated` tinyint(1) DEFAULT 0,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT 'USER',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `activated`, `fullName`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'John Doe', 'johndoe@example.com', '$2b$10$12345hashedpassword', 'USER', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(2, 1, 'Jane Smith', 'janesmith@example.com', '$2b$10$67890hashedpassword', 'ADMIN', '2024-12-22 12:57:22', '2024-12-22 12:57:22'),
(23, 0, 'Test User', 'test@test.com', '$2a$10$NX.mMgQcJ3Fepz2pLyTdvub/909CYN1MImKgmlKdE3Qi1FGb7FiRC', 'ADMIN', '2024-12-22 16:11:17', '2024-12-22 16:11:17'),
(24, 0, 'jean mark', 'jean@jean.com', '$2a$10$yJwU/siGqqg7T8s1z9Y3ZeVz.VSquz.0iT8xvuopDdJpYbE9fMVhu', 'USER', '2024-12-22 17:16:59', '2024-12-22 17:16:59');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commands`
--
ALTER TABLE `commands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `commands`
--
ALTER TABLE `commands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commands`
--
ALTER TABLE `commands`
  ADD CONSTRAINT `commands_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
