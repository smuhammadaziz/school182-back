const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4444;
const bodyParser = require('body-parser');

const router = require('./src/modules/routes');

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res) => {
  res.send('Welcome to the first Node.js Tutorial! - Clue Mediator');
});

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
