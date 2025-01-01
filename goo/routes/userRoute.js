const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.get);
router.post('/', userController.post);

module.exports = router;
