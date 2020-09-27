const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');

const Http = require('http');
const Loki = require('lokijs');
const __port = 2001;

// Setup Express
const App = Express();
App.use(Cors());
App.use(BodyParser.json({ limit: '10mb' }));
App.use(BodyParser.urlencoded({ extended: true }));

// Load DBs
const Db = new Loki('loki.json');
const ErrorData = require('./repositories/data/perfil.data')(Db);
ErrorData.init();

console.log("error",ErrorData,ErrorData.init())
// Load Controllers
const perfilController = require('./controllers/perfil.controller')

// Load Endpoints
const CommonPath = '/task/evaluate/v1.0';
// const CommonPath = '/users';
// ${CommonPath}

App.post(`/task/evaluate/v1.0`, perfilController.getTask);    
App.post(`/account/user-profile/v1.0`, perfilController.getAccount);    
// App.post(`${CommonPath}/perfil`, perfilController);    

// Start Mock-Server
App.use(function (err, req, res, next) {
    console.error(err.stack);


    res.status(500).send({ message: err.message });
});

const Server = Http.createServer(App);
Server.listen(__port, () => {
    console.log(
    '+-----\n | Ventas Digitales: mock-server listening on port ' + __port + '...\n+-----',
    );
});