const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
var cors = require('cors');
var cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
require('./db/conn');
app.use(cors());
app.use(cookieParser());
//
const PORT = process.env.PORT;
//middleware
// we link this file to make our route easy
app.use(express.json());
app.use(require('./router/auth'));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('api running');
  });
};


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
