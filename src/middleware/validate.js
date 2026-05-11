const { body } = require('express-validator');

const createUserValidation = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address'),

  body('age')
    .optional()
    .isInt({ min: 1, max: 120 }).withMessage('Age must be a number between 1 and 120'),

  body('role')
    .optional()
    .isIn(['user', 'admin']).withMessage('Role must be either "user" or "admin"'),
];

const updateUserValidation = [
  body('name')
    .optional()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),

  body('email')
    .optional()
    .isEmail().withMessage('Please provide a valid email address'),

  body('age')
    .optional()
    .isInt({ min: 1, max: 120 }).withMessage('Age must be a number between 1 and 120'),

  body('role')
    .optional()
    .isIn(['user', 'admin']).withMessage('Role must be either "user" or "admin"'),
];

module.exports = { createUserValidation, updateUserValidation };
