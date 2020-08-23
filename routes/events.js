/*
  Rutas de Eventos
  host + /api/events
*/
const express = require('express');
const router = express.Router();

const validator = require('../middlewares/validator');
const { validateJWT } = require('../middlewares/validator-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { createValidation } = require('../middlewares/eventValidationRules');

router.use(validateJWT);
router.get('/', getEvents);
router.post('/', createValidation(), validator, createEvent);
router.put('/:id', createValidation(), validator, updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
