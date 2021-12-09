var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
var middleware = require('../middleware');


// router.get('/task/:id', tasksController.create);
// router.get('/task/:id', tasksController.getAll);
router.get('/:id', tasksController.getById);

router.use(middleware);

router
    .post('/', tasksController.create)
    .get('/', tasksController.getAll);

module.exports = router;
