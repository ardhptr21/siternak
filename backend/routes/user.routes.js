const router = require('express').Router();
const userController = require('../controllers/userController');
const { isAuth, isAdmin } = require('../middlewares/authMiddleware');
const multerInstance = require('../configs/multer.config');

router.patch('/:user_id/photo', isAuth, multerInstance.single('photo'), userController.updatePhoto);
router
  .route('/:user_id')
  .get(userController.get)
  .put(isAuth, userController.update)
  .delete(isAdmin, userController.delete);
router.route('/').get(isAdmin, userController.getAll).post(userController.create);

module.exports = router;
