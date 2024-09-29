const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

// Rutas CRUD para media
router.post('/', mediaController.createMedia);
router.get('/', mediaController.getMedias);
router.get('/:id', mediaController.getMediaById);
router.put('/:id', mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
