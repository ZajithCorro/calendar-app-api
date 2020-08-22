const { check } = require('express-validator');

const loginValidation = () => {
  return [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de caracteres').isLength({
      min: 6,
    }),
  ];
};

const createUserValidation = () => {
  return [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email no tiene un formato valido').isEmail(),
    check('password', 'El password debe de ser de caracteres').isLength({
      min: 6,
    }),
  ];
};

module.exports = {
  loginValidation,
  createUserValidation,
};
