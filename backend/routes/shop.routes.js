const router = require('express').Router();
const shopController = require('../controllers/shopController');
const { isAuth } = require('../middlewares/authMiddleware');

router.route('/').get(shopController.getAll).post(isAuth, shopController.create);
router.get('/:slug', shopController.getOne);
router.route('/:id').put(isAuth, shopController.update).delete(isAuth, shopController.delete);

module.exports = router;
