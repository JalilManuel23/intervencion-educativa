const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Starting
const app = express();

// Settings
app.set('port', process.env.PORT || 3100);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Global variables
app.use((req, res, next) => {
     next();
});

// Rutas
app.use(require('./routes/calificaciones.routes'));


app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     next();
});
 

const publicPath = path.join(__dirname,'public');

app.get('*', (req, res) => {    
     res.sendFile(path.join(publicPath, 'index.html')), function(err) {             
     if (err) {                 
          res.status(500).send(err) 
          }        
     };
});

app.get('/prueba', (req, res) => {
     return res.status(200).send({
          status: 'Bien'
     })
})

module.exports = app;