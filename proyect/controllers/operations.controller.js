module.exports = {
    sum: function (req, res) {
        const {num1, num2} = req.params;
        res.json({name: 'Suma', suma: parseInt(num1) + parseInt(num2)});
        res.status(201).send();
    },

    substract: function (req, res) {
        const {num1, num2} = req.params;
        res.json({name: 'Resta', suma: parseInt(num1) - parseInt(num2)})
        res.status(201).send();
    },

    multiply: function (req, res) {
        const {num1, num2} = req.params;
        res.json({name: 'Multiplicacion', suma: parseInt(num1) * parseInt(num2)})
        res.status(201).send();
    },

    divide: function (req, res) {
        const {num1, num2} = req.params;
        res.json({name: 'Division', suma: parseInt(num1) / parseInt(num2)})
        res.status(201).send();
    }
};
