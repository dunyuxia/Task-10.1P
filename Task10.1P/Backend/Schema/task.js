const mongoose = require('../mongoose'), Schema = mongoose.Schema;

const Task = new Schema({
    type: {type: String, trim: true, required: true},
    title: {type: String, trim: true, required: true},
    description: {type: String, trim: true, required: true},
    suburb: {type: String, trim: true},
    date: {type: Date},
    charging: {type: String},
    amount: {type: Number}
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}});

module.exports = mongoose.model('Task', Task);