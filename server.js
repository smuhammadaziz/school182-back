const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4444;
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./src/modules/routes');

const multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// app.use('/uploads', express.static('uploads'));

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// var upload = multer({ storage: storage });

// app.post('/uploadfile', upload.single('dataFile'), (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send({ message: 'Please upload a file.' });
//   }
//   return res.send({ message: 'File uploaded successfully.', file });
// });

// app.post('/uploadmultifile', upload.array('dataFiles', 10), (req, res, next) => {
//   const files = req.files;
//   if (!files || (files && files.length === 0)) {
//     return res.status(400).send({ message: 'Please upload a file.' });
//   }
//   return res.send({ message: 'File uploaded successfully.', files });
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to the Node.js Tutorial! - Clue Mediator');
// });

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
