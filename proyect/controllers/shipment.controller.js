//deberas de utilizar faker para generar los datos
const faker = require('faker');
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();


module.exports = {
    createShipment: function (req, res) {
        dogstatsd.increment('shipment.createShipment');
        //debera de simular un envio con dirección un precio y una persona con sus datos
        res.json({addres: faker.address.streetAddress()+', '+faker.address.cityName() +', '+faker.address.country(), price: faker.commerce.price(), person: faker.name.findName()}); //crecion de la direccion, precio y persona 
        res.status(201).send();
    },
    changeStatus: function (req, res) {
        dogstatsd.increment('shipment.changeStatus')
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        res.json({addres: faker.address.streetAddress()+', '+faker.address.cityName() +', '+faker.address.country()});
        res.status(201).send();
    },
};

