const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err);
  });
  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err);
  });

  res.send({ status: 'Ok' });
});

app.listen(4005, () => {
  console.log(`
  Successful 🔥
  EVENT BUS
  Listening on http://localhost:4005)
  `);
});
