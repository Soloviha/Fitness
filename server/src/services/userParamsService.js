const models = require('../../db/models');

class UserParamsService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  async getParams(userId) {
    try {
      let params = await this.#db.UserParams.findOne({ where: { userId } });
      if (!params) {
        params = await this.#db.UserParams.create({
          userId,
          secondName: null,
          dateOfBirth: null,
          gender: null,
          weight: null,
          height: null,
          img: null,
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
      const { userId, secondName, dateOfBirth, gender, weight, height, BMI, img } = data;
      const [params, created] = await this.#db.UserParams.findOrCreate({
        where: { userId },
        defaults: { secondName, dateOfBirth, gender, weight, height, BMI, img },
      });

      if (!created) {
        await params.update({ secondName, dateOfBirth, gender, weight, height, BMI, img });
      }

      return params.get();
    } catch (error) {
      console.error('Ошибка при добавлении параметров:', error);
      throw error;
    }
  }
}

module.exports = new UserParamsService(models);
