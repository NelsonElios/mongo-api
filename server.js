//const express = require('express');
const server = require('express')();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const routes = require('./routes/index');
mongoose.promise = global.promise;
 routes(server);// on prend les routes et on leurs met en paramètre le serveur
server.use(bodyparser.json()); // use permet d'utiliser les middlewares
server.listen(3050,() =>{
    console.log("le serveur est à l'écoute");
    mongoose.connect('mongodb://localhost/user_api_database' ,{userMongoClient: true}
    );
    mongoose.connection.once('open',
        () => {
        console.log('connexion établie')
        }
    ).on('error',
        (error) => {
        console.warn('warning')
        }
    )

});