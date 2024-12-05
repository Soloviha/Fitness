const models = require('../../db/models');

class UserService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getUser(email) {
    return this.#db.User.findOne({ where: { email } });
  }

  async createUser(data) {
    const { email, name, password } = data;
    const [user, created] = await this.#db.User.findOrCreate({
      where: { email },
      defaults: { name, password },
    });

    if (!created) {
      throw new Error('Пользователь уже существует');
    }
    return user.get();
  }
}

module.exports = new UserService(models);
