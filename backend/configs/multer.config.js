const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    return cb(null, true);
  }
  cb('Invalid image file type', false);
};

module.exports = multer({ storage, fileFilter });
