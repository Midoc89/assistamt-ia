import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/gpt', async (req, res) => {
  const prompt = req.body.prompt;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Réponse non disponible.';
    res.json({ reply });
  } catch (error) {
    console.error('Erreur OpenAI :', error);
    res.status(500).json({ reply: 'Erreur avec l\'IA.' });
  }
});

app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
