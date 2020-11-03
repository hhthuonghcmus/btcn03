const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const port = 8080;

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(req, res) {
    res.render('index', {
        num1: '',
        num2: '',
        result: '',
        operator: '',
    });
});

server.post('/calc', function(req, res) {
    let number1 = req.body.firstNumber;
    let number2 = req.body.secondNumber;
    let operator = req.body.calculation;
    if (operator == 1) {
        result = +number1 + +number2;
    } else if (operator == 2) {
        result = +number1 - +number2;
    } else if (operator == 3) {
        result = +number1 * +number2;
    } else if (operator == 4) {
        result = +number1 / +number2;
    }
    res.render('index', {
        num1: number1,
        num2: number2,
        result: result,
        operator: operator
    });
});



server.listen(process.env.PORT || port);