const Media = require('../models/mediaModel');

// Crear una nueva película o serie
exports.createMedia = async (req, res) => {
    try {
        const media = new Media(req.body);
        await media.save();
        res.status(201).json(media);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los medios
exports.getMedias = async (req, res) => {
    try {
        const medias = await Media.find().populate('genre director producer type');
        res.json(medias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un medio por ID
exports.getMediaById = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id).populate('genre director producer type');
        if (!media) return res.status(404).json({ message: 'Medio no encontrado' });
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un medio
exports.updateMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('genre director producer type');
        if (!media) return res.status(404).json({ message: 'Medio no encontrado' });
        res.json(media);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un medio
exports.deleteMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndDelete(req.params.id);
        if (!media) return res.status(404).json({ message: 'Medio no encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
