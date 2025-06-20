const { register, login, logout, refreshTokens } = require('../services/authService');

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await register(email, password);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor!' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: 'Credenciais inválidas!' });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    await logout(req.user.id);
    res.status(200).json({ message: 'Desconectado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao realizar logout' });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const result = await refreshTokens(refreshToken);
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ message: 'Token inválido ou expirado' });
  }
};
