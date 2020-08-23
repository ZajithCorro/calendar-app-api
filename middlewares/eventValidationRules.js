const { check } = require('express-validator');
const isDate = require('../helpers/isDate');

const createValidation = () => {
  return [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  ];
};

module.exports = {
  createValidation,
};
