const createUser = (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({ ok: true, msg: 'registro', name });
};

const loginUser = (req, res) => {
  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: 'renew' });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
