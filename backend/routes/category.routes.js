const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.route('/').get(categoryController.getAll).post(isAdmin, categoryController.create);
router.route('/:id').put(isAdmin, categoryController.update).delete(isAdmin, categoryController.delete);

module.exports = router;
