const router = require('express').Router();
const shopController = require('../controllers/shopController');
const { isAuth } = require('../middlewares/authMiddleware');
const multerInstance = require('../configs/multer.config');

router.patch('/:shop_id/image', isAuth, multerInstance.single('image'), shopController.updateImage);
router
  .route('/:id')
  .get(shopController.getOneByUserId)
  .put(isAuth, shopController.update)
  .delete(isAuth, shopController.delete);
router.get('/:slug', shopController.getOneBySlug);
router.route('/').get(shopController.getAll).post(isAuth, multerInstance.single('image'), shopController.create);

module.exports = router;
