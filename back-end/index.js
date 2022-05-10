const express = require('express');
const app = express();
const port = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const route = require('./src/routes/index');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Cannot connect to MongoDB', err);
  });

//midleware
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(helmet());

route(app);

app.listen(port, () => {
  console.log(`Connected to server with port: ${port}`);
});
