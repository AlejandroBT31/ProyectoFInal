var express = require('express');
var router = express.Router();
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();
/* GET home page. */

router.get('/', function(req, res, next) {
  // Increment a counter.
  dogstatsd.increment('page.views');
  
  //res.send('<h1>Hola Mundo</h1>');
  res.send('  <style>h1,h2{font-family: forte;;}body{background-image: url("https://fondosmil.com/fondo/52705.jpg");}*{padding: 0;margin: 0;}.titulo{position: relative;top: 100px}.titulo2{position: relative;padding-top: 500px}</style><body><div  align="center"><h1 class="titulo">Diplomado</h1><br><h1 class="titulo">Arquitectura y desarrollo de software con tecnologías ágiles.</h1><br><h1 class="titulo2";>Proyecto Final Diplomado 2021</h1></div></body>');
});

module.exports = router;
