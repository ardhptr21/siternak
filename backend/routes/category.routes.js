const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { isAuth } = require('../middlewares/authMiddleware');

router.route('/').get(categoryController.getAll).post(isAuth, categoryController.create);
router.route('/:id').put(isAuth, categoryController.update).delete(isAuth, categoryController.delete);

module.exports = router;
