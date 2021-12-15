var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

module.exports = {
    sum: function (req, res) {
        dogstatsd.increment('operations.suma');
        const { num1, num2 } = req.params;
        res.json({name: 'Suma', suma: parseInt(num1) + parseInt(num2)});
        res.status(201).send();
    },

    substract: function (req, res) {
        dogstatsd.increment('operations.resta');
        const { num1, num2 } = req.params;
        res.json({name: 'Resta', resta: parseInt(num1) - parseInt(num2)});
        res.status(201).send();
    },

    multiply: function (req, res) {
        dogstatsd.increment('operations.multiply');
        const { num1, num2 } = req.params;
        res.json({name: 'Multiplicacion', multiplicacion: parseInt(num1) * parseInt(num2)});
        res.status(201).send();
    },

    divide: function (req, res) {
        dogstatsd.increment('operations.division');
        const { num1, num2 } = req.params;
        if(parseInt(num2) === 0 ){
            res.json({name: 'Division', division: "No se puede dividir entre 0 intenta otro numero"});
        }
        res.json({name: 'Division', division: parseInt(num1) / parseInt(num2)});
        res.status(201).send();
    }
};