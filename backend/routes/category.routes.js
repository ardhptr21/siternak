const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.route('/').get(categoryController.getAll).post(categoryController.create);
router.route('/:id').put(categoryController.update).delete(categoryController.delete);

module.exports = router;
