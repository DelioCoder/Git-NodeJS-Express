const express = require('express');

const server = express();

const morgan = require('morgan');

//requiriendo rutas

const router = require('./router');

const routerApi = require('./router-api');

//

//Config

server.set('appName','Mi primer server');

server.set('views', __dirname + '/views');

//console.log(__dirname);

server.set('view engine', 'ejs');

//rutas

server.use(router);

server.use('/api', routerApi);

/*server.get('*', function(req, res){

    res.send('<h1>Page 404 not found</h1>');

    res.end();

});*/

//

//middlewares

server.use(morgan('combined'));

//

server.listen(3000, function (){

    console.log('Server on port 3000');
    console.log('Nombre de la App: ',server.get('appName'));

});
