const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { createUserValidation, updateUserValidation } = require('../middleware/validate');

// POST   /api/users       - Create a new user
// GET    /api/users       - Get all users
router.route('/')
  .post(createUserValidation, createUser)
  .get(getAllUsers);

// GET    /api/users/:id   - Get a single user
// PUT    /api/users/:id   - Update a user
// DELETE /api/users/:id   - Delete a user
router.route('/:id')
  .get(getUserById)
  .put(updateUserValidation, updateUser)
  .delete(deleteUser);

module.exports = router;
