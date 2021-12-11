var express = require('express');
var router = express.Router();
var shipmentController = require('../controllers/shipment.controller');
var middleware = require('../middleware');

//integracion del controller 
router.get('/createShipment', shipmentController.createShipment);
router.get('/changeStatus', shipmentController.changeStatus);

router.use(middleware);

module.exports = router;
