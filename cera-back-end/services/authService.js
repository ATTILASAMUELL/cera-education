const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenUtils');

exports.register = async (email, password) => {
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error('Usuário já existe!');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Credenciais inválidas!');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Credenciais inválidas!');

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};

exports.logout = async (userId) => {
  return;
};

exports.refreshTokens = async (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  if (!decoded) throw new Error('Token inválido ou expirado');

  const user = await User.findById(decoded.id);
  if (!user) throw new Error('Usuário não encontrado');

  const newAccessToken = generateAccessToken(user);
  const newRefreshToken = generateRefreshToken(user);

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};
