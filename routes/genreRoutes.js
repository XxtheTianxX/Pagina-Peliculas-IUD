const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Rutas CRUD para género
router.post('/', genreController.createGenre);
router.get('/', genreController.getGenres);
router.get('/:id', genreController.getGenreById);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);

module.exports = router;
