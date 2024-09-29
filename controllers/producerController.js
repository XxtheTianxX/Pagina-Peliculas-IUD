const Producer = require('../models/producerModel');

// Crear una nueva productora
exports.createProducer = async (req, res) => {
    try {
        const producer = new Producer(req.body);
        await producer.save();
        res.status(201).json(producer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todas las productoras
exports.getProducers = async (req, res) => {
    try {
        const producers = await Producer.find();
        res.json(producers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener una productora por ID
exports.getProducerById = async (req, res) => {
    try {
        const producer = await Producer.findById(req.params.id);
        if (!producer) return res.status(404).json({ message: 'Productora no encontrada' });
        res.json(producer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar una productora
exports.updateProducer = async (req, res) => {
    try {
        const producer = await Producer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producer) return res.status(404).json({ message: 'Productora no encontrada' });
        res.json(producer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una productora
exports.deleteProducer = async (req, res) => {
    try {
        const producer = await Producer.findByIdAndDelete(req.params.id);
        if (!producer) return res.status(404).json({ message: 'Productora no encontrada' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
