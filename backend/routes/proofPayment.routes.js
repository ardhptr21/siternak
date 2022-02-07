const router = require('express').Router();
const proofPaymentController = require('../controllers/proofPaymentController');
const { isAuth } = require('../middlewares/authMiddleware');
const multerInstance = require('../configs/multer.config');

router.get('/:transaction_id/transaction', isAuth, proofPaymentController.getPaymentByTransactionId);
router.get('/:id', isAuth, proofPaymentController.getPaymentById);
router
  .route('/')
  .get(isAuth, proofPaymentController.getAll)
  .post(isAuth, multerInstance.single('image'), proofPaymentController.addPayment);

module.exports = router;
