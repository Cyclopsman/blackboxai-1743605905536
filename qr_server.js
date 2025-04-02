const express = require('express');
const qr = require('qrcode');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const gameFile = path.join(__dirname, 'heart_game.html');

// Verify game file exists
if (!fs.existsSync(gameFile)) {
  console.error('Error: heart_game.html not found in', __dirname);
  process.exit(1);
}

// Serve static files
app.use(express.static(__dirname));

// QR code endpoint
app.get('/qr', (req, res) => {
  const gameUrl = `http://${req.get('host')}/heart_game.html`;
  
  qr.toDataURL(gameUrl, (err, qrImage) => {
    if (err) {
      console.error('QR generation error:', err);
      return res.status(500).send('Error generating QR code');
    }

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Game QR Code</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 class="text-2xl font-bold mb-4">Scan to Play Star Collector</h1>
          <img src="${qrImage}" alt="QR Code" class="mx-auto mb-4 w-64 h-64">
          <p class="text-gray-600 mb-4">Point your phone's camera at the QR code</p>
          <a href="/heart_game.html" 
             class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
            Play on this device
          </a>
        </div>
      </body>
      </html>
    `);
  });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`QR code: http://localhost:${port}/qr`);
  console.log(`Game: http://localhost:${port}/heart_game.html`);
});