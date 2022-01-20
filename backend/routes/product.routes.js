const router = require('express').Router();
const productController = require('../controllers/productController');

router.route('/').get(productController.getAll).post(productController.create);
router.delete('/:product_id', productController.delete);

module.exports = router;
