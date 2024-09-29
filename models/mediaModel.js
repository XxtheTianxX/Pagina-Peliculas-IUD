const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    serial: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    synopsis: { type: String },
    url: { type: String, required: true, unique: true },
    coverImage: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    releaseYear: { type: Number },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
    producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer', required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true }
});

mediaSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Media', mediaSchema);
