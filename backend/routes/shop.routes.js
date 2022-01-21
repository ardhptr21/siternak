const router = require('express').Router();
const shopController = require('../controllers/shopController');

router.route('/').get(shopController.getAll);
router.route('/:slug').get(shopController.getOne);

module.exports = router;
