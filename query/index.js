const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/events', (req, res) => {
  const event = req.body;

  res.send({ status: 'Ok' });
});
