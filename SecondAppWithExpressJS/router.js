//rutas
//login

const express = require('express');

const router = express.Router();

router.get('/', function(req, res){

    res.render('index.ejs');

    res.end();

});

router.get('/login', function(req, res){

    res.render('login');

    res.end();

});

module.exports = router;