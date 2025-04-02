const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for our game
app.use(cors());
app.use(express.json());

// In-memory "database" for demo
let highScores = [];

// API endpoint to get high scores
app.get('/api/scores', (req, res) => {
  res.json({
    success: true,
    data: highScores.sort((a, b) => b.score - a.score).slice(0, 10)
  });
});

// API endpoint to save a score
app.post('/api/scores', (req, res) => {
  const { name, score } = req.body;
  
  if (!name || typeof score !== 'number') {
    return res.status(400).json({
      success: false,
      error: 'Invalid name or score'
    });
  }

  highScores.push({ name, score, date: new Date() });
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});