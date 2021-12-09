//deberas de utilizar faker para generar los datos
const faker = require('faker');
const fs = require('fs');

module.exports = {
    createShipment: function (req, res) {
        //debera de simular un envio con dirección un precio y una persona con sus datos
        /*direccion = faker.address.streetAddress()+', '+faker.address.cityName() +', '+faker.address.country() + LINE_ENDING, 'utf8';
        precio = faker.commerce.price() + LINE_ENDING, 'utf8';
        nombre = faker.name.findName() + LINE_ENDING, 'utf8' ;*/
        res.json({addres: faker.address.streetAddress()+', '+faker.address.cityName() +', '+faker.address.country(), price: faker.commerce.price(), person: faker.name.findName()}); //crecion de la direccion, precio y persona 
        res.status(201).send();
    },
    changeStatus: function (req, res) {
        const status = Object.assign(createShipment);
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        //res.json({addres: faker.address.streetAddress()+', '+faker.address.cityName() +', '+faker.address.country()})
        res.json({addres: faker.address.direction()});
        res.status(201).send();
    },
};
