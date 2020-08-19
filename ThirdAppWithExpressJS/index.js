/*const http = require('http');

const server = http.createServer((req, res) => {

    res.status = 200;

    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello World');

});

server.listen(3000, () => {

    console.log('Serve on port 3000');

});*/

const express = require('express');//Require it and save it with a constant

const morgan = require('morgan');

const app = express();//Execute the server and save it with a constant

//Mysql

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

// Settings

app.set('appName','Fazt Express Tutorial');

app.set('port',3000);

app.set('view engine','ejs');

//Middlewares

app.use(morgan('dev'));

app.use(express.json());

/*app.all('/user/\*',(req,res, next)=>{

        console.log('Por aqui paso');

        res.send("finish");

        next();

});
*/
//Routing

app.get('/',(req, res)=>{

    const data = [{name: 'john'}, {name: 'joe'}, {name: 'cameron'}, {name: 'ryan'}];

    res.render('index.ejs', {people: data});

});

app.get('/user', (req, res) => {

    res.json({

        username: 'Cameron',
        lastname: 'Howe'

    });

});// responding it that the user requires

app.post('/user/:id', (req, res) => {

    console.log(req.body);

    console.log(req.params);

    res.send('POST REQUEST RECEIVED');

});// responding it that the user requires

app.put('/user/:id', (req, res) => {

    console.log(req.body);

    res.send(`User ${req.params.id} updated`);

});// responding it that the user requires

app.delete('/user/:userID', (req, res) => {

    res.send(`User ${req.params.userID} deleted`);

});// responding it that the user requires

app.use(express.static('public'));

//

app.listen(app.get('port'), () => {

    console.log(app.get('appName'));

    console.log('Server on port',app.get('port'));

});//we give it a port number

