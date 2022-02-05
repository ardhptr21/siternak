const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const { isAuth } = require('../middlewares/authMiddleware');

router.route('/').get(isAuth, transactionController.getAll).post(isAuth, transactionController.create);
router.get('/buyer/:buyer_id', isAuth, transactionController.getBuyerById);
router.get('/seller/:shop_id', isAuth, transactionController.getSellerById);

module.exports = router;
