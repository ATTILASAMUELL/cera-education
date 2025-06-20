const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, refreshToken } = require('../controllers/authController');

const apiVersion = 'v1';

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário com email e senha
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@teste.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       400:
 *         description: Usuário já existe
 *       500:
 *         description: Erro no servidor
 */
router.post(`/${apiVersion}/register`, registerUser);

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login de usuário
 *     description: Realiza o login de um usuário com email e senha
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@teste.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */
router.post(`/${apiVersion}/login`, loginUser);

/**
 * @swagger
 * /api/v1/logout:
 *   post:
 *     summary: Logout de usuário
 *     description: Realiza o logout do usuário
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Logout realizado com sucesso
 *       500:
 *         description: Erro ao realizar logout
 */
router.post(`/${apiVersion}/logout`, logoutUser);

/**
 * @swagger
 * /api/v1/refresh-token:
 *   post:
 *     summary: Atualiza o token de acesso usando o refresh token
 *     description: Gera um novo token de acesso usando o refresh token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: <refresh-token>
 *     responses:
 *       200:
 *         description: Tokens atualizados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       403:
 *         description: Token inválido ou expirado
 *       500:
 *         description: Erro no servidor
 */
router.post(`/${apiVersion}/refresh-token`, refreshToken);

module.exports = router;
