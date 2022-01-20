const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/:user_id', userController.get);

module.exports = router;
