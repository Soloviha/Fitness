const articleService = require('../services/articleService');

class ArticleController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAll = async (req, res) => {
    try {
      const article = await this.#service.getAllArticle();
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };

  createArticle = async (req, res) => {
    try {
      const data = req.body;
      const newArticle = await this.#service.createArticle({
        ...data,
        userId: res.locals.user.id,
      });
      res.status(200).json(newArticle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
}

module.exports = new ArticleController(articleService);
