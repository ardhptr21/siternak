const router = require('express').Router();
const userController = require('../controllers/userController');
const { isAuth } = require('../middlewares/authMiddleware');
const multerInstance = require('../configs/multer.config');

router.post('/', userController.create);
router.post('/:user_id/photo', isAuth, multerInstance.single('photo'), userController.updatePhoto);
router.get('/:user_id', userController.get);

module.exports = router;
