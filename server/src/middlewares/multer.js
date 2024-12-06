const multer = require('multer');
// const path = require('path');

// Настройка хранилища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Fitness/server/src/public'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

// Создание экземпляра Multer
const upload = multer({ storage });

module.exports = upload;
