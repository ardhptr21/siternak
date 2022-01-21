const router = require('express').Router();
const authController = require('../controllers/authController');
const { isGuest } = require('../middlewares/authMiddleware');

router.post('/login', isGuest, authController.login);
router.post('/verify', authController.verify);

module.exports = router;
