const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Nft = mongoose.model("Nft", nftSchema);

module.exports = Nft;