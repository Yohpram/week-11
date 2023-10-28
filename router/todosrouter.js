const express = require('express');
const todosController = require('../controller/todoscontrolles'); 
const router = express.Router();

router.get('/todo', todosController.getalltodo);
router.get('/todo/:id', todosController.gettododetail);
router.delete('/todo/:id', todosController.deletetodo);
router.post('/todo', todosController.createtodo);
module.exports = router;