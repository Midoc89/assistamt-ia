# Dockerfile
FROM node:18

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port
EXPOSE 3000

# Démarrer le serveur
CMD ["node", "server.js"]
