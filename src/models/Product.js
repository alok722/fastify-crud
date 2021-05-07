const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	category: String,
	unit: Number,
});

module.exports = mongoose.model('Product', productSchema);