const models = require('../../db/models');

class UserParamsService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  async getParams(userId) {
    try {
      let params = await this.#db.UserParams.findOne({ where: { userId } });
      // Если параметры не найдены, создаём их с null
      if (!params) {
        params = await this.#db.UserParams.create({
          userId,
          secondName: null,
          dateOfBirth: null,
          weight: null,
          height: null,
        });
      }
      return params.get();
    } catch (error) {
      console.error('Ошибка при получении параметров:', error);
      throw error;
    }
  }

  async addingParams(data) {
    try {
      const { userId, secondName, dateOfBirth, weight, height } = data;
      const [params, created] = await this.#db.UserParams.findOrCreate({
        where: { userId },
        defaults: { secondName, dateOfBirth, weight, height },
      });

      if (!created) {
        await params.update({ secondName, dateOfBirth, weight, height });
      }

      return params.get();
    } catch (error) {
      console.error('Ошибка при добавлении параметров:', error);
      throw error;
    }
  }
}

module.exports = new UserParamsService(models);
