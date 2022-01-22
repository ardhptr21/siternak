const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/seller', isAuth, transactionController.getSeller);
router.get('/buyer', isAuth, transactionController.getBuyer);
router.post('/', isAuth, transactionController.create);

module.exports = router;