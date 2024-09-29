const Genre = require('../models/genreModel');

// Crear un nuevo género
exports.createGenre = async (req, res) => {
    try {
        const genre = new Genre(req.body);
        await genre.save();
        res.status(201).json(genre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los géneros
exports.getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un género por ID
exports.getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (!genre) return res.status(404).json({ message: 'Género no encontrado' });
        res.json(genre);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un género
exports.updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!genre) return res.status(404).json({ message: 'Género no encontrado' });
        res.json(genre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un género
exports.deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        if (!genre) return res.status(404).json({ message: 'Género no encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};