var express = require('express');
var Controller = require('../controllers/test');


var router = express.Router();
const controller = new Controller();

/* GET home page. */
router.get('/', (req, res) => controller.get(req, res));

module.exports = router;
