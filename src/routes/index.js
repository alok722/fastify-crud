const productController = require('../controllers/productController');

const routes = [
	{
		method: 'GET',
		url: '/api/product',
		handler: productController.get
	},
	{
		method: 'GET',
		url: '/api/product/:id',
		handler: productController.getById
	},
	{
		method: 'POST',
		url: '/api/product',
		handler: productController.add
	},
	{
		method: 'PUT',
		url: '/api/product/:id',
		handler: productController.update
	},
	{
		method: 'DELETE',
		url: '/api/product/:id',
		handler: productController.delete
	},

];

module.exports = routes;