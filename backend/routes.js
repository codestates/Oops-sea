const express = require('express');
const router = express.Router()
const nftController = require('./controller/nft')

router.post('/', nftController.createNft);
router.get('/', nftController.getNfts);
router.get('/:nftId', nftController.getNftById);
router.put('/:nftId', nftController.updateNft);
router.delete('/:nftId', nftController.deleteNft);
module.exports = router;