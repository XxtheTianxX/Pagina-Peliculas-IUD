const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

directorSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Director', directorSchema);
