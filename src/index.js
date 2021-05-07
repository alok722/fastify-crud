const fastify = require('fastify')({
	logger: true
});

// bring in routes
const routes  = require('./routes');

// db
const mongoose = require('mongoose');

// db connection
mongoose.connect('mongodb://localhost/fastifycrud', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected!'))
	.catch(err => console.log(err));


routes.forEach((route) => {
	fastify.route(route);
});

// starting server
const start = async () => {
	try {
		await fastify.listen(3030);
		fastify.log.info('Server is running at 3030');
	} catch (error) {
		fastify.log.error('Error running fastify server');
	}
};
start();
