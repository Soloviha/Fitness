const models = require('../../db/models');

class UserParameterService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getAllParameters() {
    return this.#db.UserParameter.findAll({ include: [{ model: this.#db.User }] });
  }

  async getParameterMyUserId(userId) {
    try {
      const parameter = await this.#db.UserParameter.findOne({
        where: { userId },
        include: [{ model: this.#db.User }],
      });
      if (!parameter) {
        throw new Error(`Параметр для пользователя с id ${userId} не найден`);
      }
      return parameter.get();
    } catch (error) {
      console.error(`Ошибка при получении параметра для пользователя с id ${userId}:`, error);
      throw error;
    }
  }


  

  async createParameter(data) {
    const newParameter = await this.#db.UserParameter.create(data);
    return this.#db.UserParameter.findByPk(newParameter.id, {
      include: [{ model: this.#db.User }],
    });
  }
  

  async  updateParameter(id, data){
        const parameter = await this.#db.UserParameter.findByPk(id ,{ include:[{model:this.#db.User}]}) ;
        if (!parameter) throw new Error('Параметр не найден');
        await parameter.update(data);
        
        return parameter;
}

}

module.exports = new UserParameterService(models);
