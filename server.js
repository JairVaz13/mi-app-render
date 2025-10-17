const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const STATIC_DIR = path.join(__dirname);

app.use(express.static(STATIC_DIR));

// fallback a index.html para rutas SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});