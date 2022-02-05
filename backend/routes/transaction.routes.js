const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const { isAuth } = require('../middlewares/authMiddleware');

router.route('/').get(isAuth, transactionController.getAll).post(isAuth, transactionController.create);

module.exports = router;
