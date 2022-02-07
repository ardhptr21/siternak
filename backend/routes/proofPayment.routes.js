const router = require('express').Router();
const proofPaymentController = require('../controllers/proofPaymentController');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/:transaction_id/transaction', isAuth, proofPaymentController.getPaymentByTransactionId);
router.get('/:id', isAuth, proofPaymentController.getPaymentById);
router.route('/').get(isAuth, proofPaymentController.getAll).post(isAuth, proofPaymentController.addPayment);

module.exports = router;
