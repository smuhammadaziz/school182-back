const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4444;

const router = require('./src/modules/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
