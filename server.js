const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Backend API
app.get('/api/data', (req, res) => {
  res.json({
    message: "This is JSON data from the backend API!",
    time: new Date().toISOString(),
    author: "Saif Khan"
  });
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
