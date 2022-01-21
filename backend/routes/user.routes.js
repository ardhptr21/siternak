const router = require('express').Router();
const userController = require('../controllers/userController');
const { isAuth } = require('../middlewares/authMiddleware');

router.post('/', userController.create);
router.get('/:user_id', userController.get);

module.exports = router;
