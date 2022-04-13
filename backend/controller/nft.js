const nftModel = require('../models/Nft');

exports.createNft = async (req, res, next) => {
  try{
    const createNft = await nftModel.create(req.body);
    // console.log(createNft);
    res.status(201).json(createNft);
  }catch (error) {
    next(error);
  }
}

exports.getNfts = async (req, res, next) => {
  try {
    const allNfts = await nftModel.find({});
    res.status(200).json(allNfts);
  }catch (error) {
    next(error);
  }
}

exports.getNftById = async (req, res, next) => {
  try {
    const product = await nftModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    }else{
      res.status(404).send();
    }
  }catch (error) {
    next(error);
  }
}

exports.updateNft = async (req, res, next) => {
  try {
    const product = await nftModel.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (product) {
      res.status(200).json(product);
    }else{
      res.status(404).send();
    }
  }catch (error) {
    next(error);
  }
}

exports.deleteNft = async (req, res, next) => {
  try {
    const product = await nftModel.findByIdAndDelete(req.params.productId);
    if (product) {
      res.status(200).json(product);
    }else{
      res.status(404).send();
    }
  }catch (error) {
    next(error);
  }
}