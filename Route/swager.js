/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - code
 *         - name
 *         - author
 *         - stock
 *       properties:
 *         code:
 *           type: string
 *           description: the code of your book
 *         name:
 *           type: string
 *           description: The name of your book
 *         author:
 *           type: string
 *           description: The author of book
 *         stock:
 *           type: integer
 *           description: stock a book
 *         
 */


/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   get:
 *     summary: Data Buku Yang Stock Nya Masih Ada
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Books'
 *   post:
 *     summary: Tambah buku baru 
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Books'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       500:
 *         description: Some server error
 */



/**
 *  Members
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Members:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description:  name dari member
 *         email:
 *           type: string
 *           description: email dari member
 *         status:
 *           type: string
 *           description: status memiliki Sanksi Atau Tidak
 *         status_sanksi:
 *           type: Date
 *           description: jika sudah jatuh tempo masa sanksi otomatis bisa untuk meminjam
 *         
 */


/**
 * @swagger
 * tags:
 *   name: Members
 *   description: The Members managing API
 * /members:
 *   get:
 *     summary: Data members dan jumlah buku yang dipinjam
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Members'
 *   post:
 *     summary: Tambah Member Baru
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Members'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Members'
 *       500:
 *         description: Some server error
 */

/**
 * Booking Buku
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Boking:
 *       type: object
 *       required:
 *         - code
 *         - id_member
 *       properties:
 *         code:
 *           type: string
 *           description: The id of book 
 *         id_member:
 *           type: integer
 *           description: the id of member
 *   
 */


/**
 * @swagger
 * tags:
 *   name: Boking
 *   description: managing API Boking Book
 * /boking-book:
 *   get:
 *     summary: Data members yang meminjam buku
 *     tags: [Boking]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Boking'
 *   post:
 *     summary: Meminjam Buku
 *     tags: [Boking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boking'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Boking'
 *       500:
 *         description: Some server error
 */


/**
 *  Return Book
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Return-book:
 *       type: object
 *       required:
 *         - code
 *         - id_member
 *         - tanggal_pengembalian
 *       properties:
 *         code:
 *           type: string
 *           description: Code Book
 *         id_member:
 *           type: integer
 *           description: Id Dari Member
 *         tanggal_pengembalian:
 *           type: string
 *           description: Tanggal Pengimbalian Masukan Format YYYY-MM-DD
 *   
 */


/**
 * @swagger
 * tags:
 *   name: Return-book
 *   description: managing API return-book
 * /return-book:
 *   get:
 *     summary: Logs data peminjaman buku
 *     tags: [Return-book]
 *     responses:
 *       200:
 *         description: List Logs Pemngembalian Buku
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Return-book'
 *   post:
 *     summary: Pengembalian Buku
 *     tags: [Return-book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Return-book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Return-book'
 *       500:
 *         description: Some server error
 */
