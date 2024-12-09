const models = require('../../db/models');

class ArticleService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getAllArticle() {
    return this.#db.Article.findAll();
  }

  async createArticle(data) {
    const newArticle = await this.#db.Article.create(data);
    return newArticle;
  }
}

module.exports = new ArticleService(models);
