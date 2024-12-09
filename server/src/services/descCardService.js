const models = require('../../db/models');

class DescCardService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  async getAllDescCard() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.#db.DescCard.findAll();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DescCardService(models);
