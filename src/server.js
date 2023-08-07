const express = require('express');

const api = express();

api.get('/', (req, res) => {
  res.json({ message: "MINHA API TÁ ON" });
});

api.listen(3000, () => {
  console.log('API rodando na porta 3000');
});