const router = require('express').Router();
const productController = require('../controllers/productController');

router.route('/').get(productController.getAll).post(productController.create);
router.route('/:product_id').put(productController.update).delete(productController.delete);
router.get('/:slug', productController.getOne);

module.exports = router;
