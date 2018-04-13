//const express = require('express');
const server = require('express')();
const routes = require('./routes/index');
 routes(server);// on prend les routes et on leurs met en paramètre le serveur

server.listen(3050,() =>{
    console.log(("le serveur est à l'écoute"))
});