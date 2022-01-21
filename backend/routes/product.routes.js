const router = require('express').Router();
const productController = require('../controllers/productController');
const { isAuth } = require('../middlewares/authMiddleware');

router.route('/').get(productController.getAll).post(isAuth, productController.create);
router.route('/:product_id').put(isAuth, productController.update).delete(isAuth, productController.delete);
router.get('/:slug', productController.getOne);

module.exports = router;
