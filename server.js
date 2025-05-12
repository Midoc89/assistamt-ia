import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/gpt', async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Pas de réponse.";
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "Erreur lors de l'appel à OpenAI." });
  }
});

app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
