const express = require('express');
const router = express.Router();
const producerController = require('../controllers/producerController');

// Rutas CRUD para productora
router.post('/', producerController.createProducer);
router.get('/', producerController.getProducers);
router.get('/:id', producerController.getProducerById);
router.put('/:id', producerController.updateProducer);
router.delete('/:id', producerController.deleteProducer);

module.exports = router;
