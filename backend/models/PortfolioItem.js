const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    skills: {
        type: [String], // Array of strings for skills
        required: true,
    },
    link: {
        type: String, // URL of the project
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
