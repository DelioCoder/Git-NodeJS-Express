/*Modulos
const math = require('./math.js');

console.log(math.add(1,0));
console.log(math.substract(1,0));
console.log(math.multiply(1,0));
console.log(math.divide(1,0));
*/
//Modulos preconstruidos:
//Sistema Operativo
const os = require('os');
//FileSystem
const fs = require('fs');
/*
fs.writeFile('./texto.txt', 'Linea uno', function(err){

    if(err){

        console.log(err);

    }

    console.log('Archivo Creado :D');

});

console.log('ultima linea de código');

fs.readFile('./texto.txt',function(err, data){

    if(err){

        console.log(err);

    }

    console.log(data.toString());
    
});

/*Function for do consults to BD

const users = query('SELECT*FROM users');
//
query('SELECT*FROM users',function(err, users){

    if(err){

        console.log(err);

    }

    if(users){



    }

});
*//*
Modulo Http o servidor
const http = require('http');

const handleServer = function(req, res){

    res.writeHead(200, { 'Content-type':'text/html' });

    res.write('<h1>Hola mundo</h1>');

    res.end();

}

const server = http.createServer(handleServer);

server.listen(3000,function(){

    console.log('Server on port 3000');

});
*/

const express = require('express');

const server = express();

server.get('/', function(req, res){

    res.send('<h1>Hola mundo con express y NodeJS</h1>');

    res.end();

});

server.listen(3000, function (){

    console.log('Server on port 3000');

});