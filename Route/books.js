const bookController = require("../src/Controller/BookController"); // importing userController

const express = require("express");

const router = express.Router();

/**
 * Route Book
 */

// READ - get
router.get("/", bookController.getAllBooks);
// CREATE - post
router.post("/", bookController.createBook);



module.exports = router;