/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/
const express = require('express');
const router = express.Router();

const validator = require('../middlewares/validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const {
  loginValidation,
  createUserValidation,
} = require('../middlewares/userValidationRules');

router.post('/', loginValidation(), validator, loginUser);
router.post('/new', createUserValidation(), validator, createUser);
router.get('/renew', renewToken);

module.exports = router;
