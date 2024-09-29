const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slogan: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],  // Solo permite estos valores
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Producer = mongoose.model('Producer', producerSchema);

module.exports = Producer;
