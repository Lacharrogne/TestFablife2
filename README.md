Gestionnaire de Recettes

Ce projet est une application web de gestion de recettes développée en utilisant React pour le frontend et NestJS avec TypeORM pour le backend. L'application permet aux utilisateurs de gérer une liste d'ingrédients et de recettes de manière persistante à l'aide d'une base de données PostgreSQL.

Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

Node.js (version 14 ou supérieure)
npm ou Yarn (pour la gestion des packages)
PostgreSQL (pour la base de données)

Configuration de la base de données
Créez une base de données PostgreSQL :

Connectez-vous à PostgreSQL et créez une nouvelle base de données pour l'application.

CREATE DATABASE recipes;

Mettez à jour le fichier de configuration de TypeORM :

Ouvrez le fichier src/config/ormconfig.ts (ou ormconfig.json si vous utilisez JSON) et mettez à jour les informations de connexion à la base de données :

export const ormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'votre_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'gestionnaire_recettes',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Attention : à ne pas utiliser en production
};

Installation des dépendances

Backend

Naviguez jusqu'au répertoire du backend :

cd back

npm install

Frontend

Naviguez jusqu'au répertoire du frontend :

cd front

npm install

Démarrer l'application
Démarrer le backend
Assurez-vous de vous trouver dans le répertoire du backend :

Assurez-vous de vous trouver dans le répertoire du backend :

cd back

Démarrez le serveur NestJS :

npm start

Démarrer le frontend

Assurez-vous de vous trouver dans le répertoire du frontend :

cd front

Démarrez l'application React :

npm start

