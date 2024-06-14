const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT || 3000
const app = express();
const cors = require('cors')

/**
 * for Swager
 */
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('./options')
const specs = swaggerJsdoc(options);

/**
 * for middleware
 */
const middlewareLogRequest = require('./src/Middleware/Logs.js');

/**
 * Import Route
 */
const booksRoutes = require('./Route/books');
const memberRoutes = require("./Route/member")
const bokingRoutes = require('./Route/boking.js');
const returnRoutes = require('./Route/return.js')

/**
 * Route
 */

// middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use(cors())

//For Book
app.use('/books', booksRoutes);

// for bokked book
app.use('/members', memberRoutes);

// for boking buku
app.use('/boking-book', bokingRoutes);

// for return book
app.use('/return-book', returnRoutes);

//For Documentaion API
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));


// listen Aplikasi
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
