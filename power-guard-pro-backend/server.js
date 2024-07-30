// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example route for testing
app.get('/api/data', (req, res) => {
  res.json({ message: 'Access granted without authentication' });
});

app.get('/', (req, res) => {
  res.send('Power Guard Pro API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
