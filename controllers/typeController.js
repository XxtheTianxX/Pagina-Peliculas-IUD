const Type = require('../models/typeModel');

// Crear un nuevo tipo
exports.createType = async (req, res) => {
    try {
        const type = new Type(req.body);
        await type.save();
        res.status(201).json(type);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los tipos
exports.getTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.json(types);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un tipo por ID
exports.getTypeById = async (req, res) => {
    try {
        const type = await Type.findById(req.params.id);
        if (!type) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.json(type);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un tipo
exports.updateType = async (req, res) => {
    try {
        const type = await Type.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!type) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.json(type);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un tipo
exports.deleteType = async (req, res) => {
    try {
        const type = await Type.findByIdAndDelete(req.params.id);
        if (!type) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
