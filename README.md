# Assistant IA Web

Assistant personnel en ligne avec interface web + connexion à OpenAI.

## 🔧 Fonctionnalités
- Interface web HTML/CSS/JS
- Base de réponses locales via JSON
- Appel à GPT (OpenAI) via backend Node.js
- Docker + Docker Compose pour simplifier le déploiement

## 🚀 Déploiement sur Render
1. Fork ce dépôt sur GitHub
2. Crée un compte sur https://render.com
3. Crée un nouveau Web Service, connecte ton GitHub
4. Déploie avec l'option Docker
5. Ajoute ta variable `OPENAI_API_KEY` dans les settings Render

## 💻 Démarrage en local
```bash
npm install
node server.js
```

## 🐳 Démarrage avec Docker
```bash
docker-compose up --build
```
