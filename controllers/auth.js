const bcrypt = require('bcryptjs');

const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

const User = require('../models/User');

const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let usuario = await User.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario ya existe con ese correo',
      });
    }

    usuario = new User(req.body);
    usuario.password = hashPassword(password);

    await usuario.save();

    const token = await generateToken(usuario.id, usuario.name);

    res
      .status(201)
      .json({ ok: true, uid: usuario.id, name: usuario.name, token });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario registrado con ese correo',
      });
    }

    const isValid = comparePassword(password, usuario.password);

    if (!isValid) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña incorrecta',
      });
    }

    const token = await generateToken(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador de base de datos',
    });
  }
};

const renewToken = async (req, res) => {
  const token = await generateToken(req.uid, req.name);

  res.json({ ok: true, token, uid: req.uid, name: req.name });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
