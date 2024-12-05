const bcrypt = require('bcrypt');
const cookieConfig = require('../configs/cookieConfig');
const generateTokens = require('../utils/generateTokens');
const userService = require('../services/userService');

class AuthController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = await this.#service.getUser(email);
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ error: 'Не верный логин или пароль' });
    }

    try {
      delete user.password;
      const { accessToken, refreshToken } = generateTokens({ user });
      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  // eslint-disable-next-line class-methods-use-this
  logout = (req, res) => {
    res.clearCookie('refreshToken').sendStatus(200);
  };

  signup = async (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const user = await this.#service.createUser({
        email,
        name,
        password: await bcrypt.hash(password, 10),
      });

      delete user.password;

      const { accessToken, refreshToken } = generateTokens({ user });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      if (error instanceof Error && error.message === 'Пользователь уже существует') {
        return res.status(400).json({ error });
      }
      console.errors(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
}

module.exports = new AuthController(userService);
