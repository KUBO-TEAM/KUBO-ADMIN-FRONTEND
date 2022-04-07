const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, required: true},
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);