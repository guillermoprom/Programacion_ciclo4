const express = require("express");
const server = express();
const empleado={
    "primerNombre":"juan",
    "segundoNombre":"pablo"


};

server.get('/',function(request,response){
    response.send("servicio get raiz")
});

server.get('/empleado',function(request,response){
    response.send(empleado)
});


server.listen(
    4000,()=>{
        console.log("hola mundo, inicio servidor");
    }
);