const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const { isAuth, isAdmin } = require('../middlewares/authMiddleware');

router.route('/').get(isAuth, transactionController.getAll).post(isAuth, transactionController.create);
router.get('/buyer/:buyer_id', isAuth, transactionController.getBuyerById);
router.get('/seller/:shop_id', isAuth, transactionController.getSellerById);
router.patch('/:id', isAuth, transactionController.changeStatus);
router.patch('/:id/review-done', isAdmin, transactionController.reviewDone);

module.exports = router;
