/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
const Product  = require('../models/Product');

exports.get = async (req, reply) => {
	try {
		const products = await Product.find();
		return products;
	} catch (error) {
		throw error;
	}
};

exports.getById = async (req, reply) => {
	try {
		const productId = req.params.id;
		const product = await Product.findById(productId);
		return product;
	} catch (error) {
		throw error;
	}
};

exports.add = async (req, reply) => {
	try {
		const product = new Product(req.body);
		return product.save();
	} catch (error) {
		throw error;
	}
};

exports.update = async (req, reply) => {
	try {
		const productId = req.params.id;
		const product = req.body;
		const update = await Product.findByIdAndUpdate(productId, product, {new: true});
		return update;
	} catch (error) {
		throw error;
	}
};

exports.delete = async(req, reply) => {
	try {
		const productId = req.params.id;
		const product = Product.findByIdAndDelete(productId);
		return product;
	} catch (error) {
		throw error;
	}
};