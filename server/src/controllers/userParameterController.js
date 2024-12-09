const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
/* eslint-disable no-console */
// const UserParameterService = require('../services/UserParameterService');

const userParameterService = require('../services/userParameterService');

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
console.log(req.file)
    try {
      if (!req.file) {
        console.log('Файл не найден в req.file');
        return res.status(400).json({ error: 'Файл не загружен' });
      }
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      console.log(req.file.originalname, '<---- original name')
      const newFileName = `${Date.now().toString(16)}.webp`

      // tesli webp to 2 raza web.webp
      const filePath = path.join('./public/img', newFileName);

      await fs.writeFile(filePath, outputBuffer);

      const newParameter = await this.#service.createParameter({
        ...data,
        userId: res.locals.user.id,
        img: `/img/${newFileName}`,
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

module.exports = new UserParameterController(userParameterService);
