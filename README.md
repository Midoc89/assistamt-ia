# Assistant IA Web

Assistant personnel en ligne avec interface web + connexion à OpenAI.

## 🔧 Fonctionnalités
- Interface web HTML/CSS/JS
- Base de réponses locales via JSON (`public/data.json`)
- Appel à GPT (OpenAI) via backend Node.js
- Déploiement facile sur Render (sans Docker)

## 🚀 Déploiement sur Render
1. Fork ou clone ce dépôt sur GitHub
2. Crée un compte sur [https://render.com](https://render.com)
3. Crée un **nouveau Web Service**
4. Choisis le runtime **Node.js**
5. Laisse la commande de démarrage sur `npm start`
6. Ajoute la variable d’environnement :

```
OPENAI_API_KEY=ta_clef_openai
```

7. Clique sur **Deploy** 🎉

## 💻 Démarrage en local
```bash
npm install
npm start
```

## 📁 Arborescence
- `public/index.html` : interface utilisateur
- `public/data.json` : base de réponses locales
- `server.js` : serveur Express connecté à OpenAI
- `.env` : (à créer en local) stocke ta clé OpenAI
- `package.json` : dépendances du projet
