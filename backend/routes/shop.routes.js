const router = require('express').Router();
const shopController = require('../controllers/shopController');

router.route('/').get(shopController.getAll).post(shopController.create);
router.get('/:slug', shopController.getOne);
router.route('/:id').put(shopController.update).delete(shopController.delete);

module.exports = router;
