require('dotenv').config();
const express = require('express');
const PORT = 8081;
const app = express();
const nftRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));

app.use(express.json());

app.use("/api/nft", nftRoutes)

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message })
})


app.listen(PORT, ()=>{
  console.log(`Running on port ${PORT}`)
});

module.exports = app;