/*
  Rutas de Eventos
  host + /api/events
*/
const express = require('express');
const router = express.Router();

const { validateJWT } = require('../middlewares/validator-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

router.get('/', validateJWT, getEvents);
router.post('/', validateJWT, createEvent);
router.put('/:id', validateJWT, updateEvent);
router.delete('/:id', validateJWT, deleteEvent);

module.exports = router;
