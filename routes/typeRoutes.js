const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

// Rutas CRUD para tipo
router.post('/', typeController.createType);
router.get('/', typeController.getTypes);
router.get('/:id', typeController.getTypeById);
router.put('/:id', typeController.updateType);
router.delete('/:id', typeController.deleteType);

module.exports = router;
