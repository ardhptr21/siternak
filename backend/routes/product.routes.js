const router = require('express').Router();
const productController = require('../controllers/productController');
const { isAuth } = require('../middlewares/authMiddleware');
const multerInstance = require('../configs/multer.config');

router.patch('/:product_id/image', multerInstance.single('image'), isAuth, productController.updateImage);
router
  .route('/:product_id')
  .put(isAuth, multerInstance.single('image'), productController.update)
  .delete(isAuth, productController.delete);
router.get('/:slug', productController.getOne);
router.route('/').get(productController.getAll).post(isAuth, multerInstance.single('image'), productController.create);

module.exports = router;
