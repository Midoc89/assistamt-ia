# Assistant IA Web

## 🧰 Installation
1. Installe Node.js si ce n'est pas déjà fait.
2. Ouvre un terminal à la racine du projet.

```bash
npm init -y
npm install express cors body-parser dotenv node-fetch
```

3. Ajoute ta clé API OpenAI dans `.env`

```
OPENAI_API_KEY=sk-...
```

4. Lance le serveur :

```bash
node server.js
```

5. Ouvre ton navigateur sur `http://localhost:3000`

## 📁 Contenu
- `/public/index.html` — Interface web avec IA
- `/public/data.json` — Réponses locales simples
- `/server.js` — Serveur Express avec appel à OpenAI


## 🐳 Docker

1. Assurez-vous que Docker et Docker Compose sont installés.
2. Placez votre clé API OpenAI dans un fichier `.env` à la racine :

```
OPENAI_API_KEY=sk-...
```

3. Dans un terminal, lancez :

```
docker-compose up --build
```

4. L'application sera disponible sur : http://localhost:3000
