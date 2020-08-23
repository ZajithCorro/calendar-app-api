const Evento = require('../models/Event');

const getEvents = async (req, res) => {
  try {
    const eventos = await Evento.find().populate('user', 'name');

    res.json({
      ok: true,
      eventos,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

const createEvent = async (req, res) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventDB = await evento.save();
    res.json({
      ok: true,
      evento: eventDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Evento.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'No existe un evento con ese Id',
      });
    }

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privelegio para editar este evento',
      });
    }

    const nuevoEvento = { ...req.body, user: req.uid };
    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventId,
      nuevoEvento,
      { new: true }
    );

    res.json({
      ok: true,
      event: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Evento.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'No existe un evento con ese Id',
      });
    }

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privelegio para eliminar este evento',
      });
    }

    await Evento.findByIdAndDelete(eventId);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
