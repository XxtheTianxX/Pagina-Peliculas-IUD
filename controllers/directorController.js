const Director = require('../models/directorModel');

// Crear un nuevo director
exports.createDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los directores
exports.getDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un director por ID
exports.getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.json(director);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un director
exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un director
exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
