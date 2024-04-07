// Import necessary dependencies
const express = require('express');

// Create a new instance of Express router
const router = express.Router();

// Import controller classes
const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');

// Create instances of controller classes
const userController = new UserController();
const postController = new PostController();

// Define routes and their corresponding controller methods
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

// Export the router
module.exports = router;