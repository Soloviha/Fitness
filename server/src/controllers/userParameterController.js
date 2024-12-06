/* eslint-disable no-console */
const UserParameterService = require('../services/UserParameterService');

class UserParameterController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllParameters = async (req, res) => {
    try {
      const parameters = await this.#service.getAllParameters();
      res.json(parameters);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };

  createParameter = async (req, res) => {
    const data = req.body;
    const photoPath = req.file ? req.file.path : null; 
  
    try {
      const newParameter = await this.#service.createParameter({
        ...data,
        userId: res.locals.user.id,
        img: photoPath, 
      });
      res.status(201).json(newParameter);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
  

  updateParameter = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const [updated] = await this.#service.updateParameter(id, data);
      if (updated) {
        const updatedParameter = await this.#service.getParameterById(id);
        res.json(updatedParameter);
      } else {
        res.status(404).json({ message: 'Параметр не найден' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };

 
}

module.exports = new UserParameterController(UserParameterService);
