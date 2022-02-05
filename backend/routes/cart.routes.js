const router = require('express').Router();
const cartController = require('../controllers/cartController');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/:user_id', isAuth, cartController.getByUserId);
router.delete('/:user_id/:product_id', isAuth, cartController.deleteCartItem);
router.route('/:user_id').post(isAuth, cartController.create).put(isAuth, cartController.updateOne);

module.exports = router;
