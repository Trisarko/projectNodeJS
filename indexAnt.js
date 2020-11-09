



// var http = require('http');

// function onServer(request, response) {
//     console.log("Petición ok");

//     response.writeHead( 200, {"Content-Type":"text/html"});

//     response.write("<h1> Server online, hi!</h1>");

//     response.end();
// }

// var server = http.createServer(onServer);

// server.listen(3000);

// console.log("working in http://localhost:3000/");

// var http = require('http');

// http.createServer ((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write ("Otro Saludo");
//     response.end();

// }).listen(3000, 'localhost');
// console.log('Server running in http://localhost:3000/');

// var http = require('http');

// fs = require("fs");

// http.createServer((req, res) =>{
//     fs.readFile(`./homer.html`, (err, html) => {
//         res.write(html);
//         res.end();
//     });
// }).listen(3000);
// console.log('Server running in http://localhost:3000/');

// let http = require('http');

// fs = require("fs");

// http.createServer((req, res) => {

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     switch (req.url) {
//         case '/':
//             plantilla = "home.html"
//             break;
//         case '/express':
//             plantilla = "sobre_express.html"
//             break;
//         default:
//             plantilla = "404.html"
//             break;
//     }

//     fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
//                 res.write(datos);
//                 res.end();  
//     });
// }).listen(3000, 'localhost');
// console.log("Server ok");

// const fs = require("fs");
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {

//     switch (req.url) {
//                 case '/':
//                     plantilla = "home.html"
//                     break;
//                 case '/express':
//                     plantilla = "sobre_express.html"
//                     break;
//                 default:
//                     plantilla = "404.html"
//                     break;
//             }
        
//             fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
//                         res.write(datos);
//                         res.end(); 


// });
// }); 
// server.listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

/*server express
*forma seis
*npm install express
*usar rutas con express
*/

/*const express = require('express')

const app  = express() //inicializar express

let fs = require('fs')

const hostname = '127.0.0.1'

const port = 3000

app.use( (req, res) =>{
    // res.send('Hello Word With Express')

    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case '/':
            plantilla = "home.html"
            break;
        case '/express':
            plantilla = "sobre_express.html"
            break;
        default:
            plantilla = "404.html"
            break;
    }

    fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
                res.write(datos);
                res.end();  
    });
})

const server = app.listen( port, ()=>{
    console.log(`Server running at http://${hostname}:${server.address().port}/`)
})*/

/**server express
 * forma 7
 * gestionar rutas de los verbos
 * GET, PUSH, PATCH, DELETE con Express
 */

 let express = require('express')
 let router = express.Router() // para gestionar las peticiones (send request)

 const HOSTNAME = '127.0.0.1'
 const PORT = 3000

 let app = express() // inicializar express

 // Usar el Routerdesde express

 app.use(router) // usa el router desde express

 //gestionar las peticiones
 //get listar todos los registros
 router.get('/users', (req, res) =>{
     //res.send('User list')

     res.send(
        {"user" :[ 
        {
             "first_name": "Maria",
             "last_name":  "Jaramillo",
             "phone" : "312555555"
         },
         {
            "first_name": "Alejandroa",
            "last_name":  "Roncancio",
            "phone" : "3225991382"
        },{
            "first_name": "Paola",
            "last_name":  "Zuluaga",
            "phone" : "3008954624"
        },]}
     )
 })
 
 //get listar un solo registro
 router.get('/user_id', (req, res) =>{
    //res.send('User list')

    res.send(
       {"user" :[ 
       {
            "first_name": "Maria",
            "last_name":  "Jaramillo",
            "phone" : "312555555"
        }]}
    )
})
 
//post add un registro
router.post('/add_user', (req, res) =>{
    //res.send('User list')

    res.send(
       {"user" :[ 
       {
            "first_name": "Evaristo",
            "last_name":  "Perez",
            "phone" : "312584954"
        }]}
    )
})

//put actualizar un registro
router.put('/update_user/user_id', (req, res) =>{
    //res.send('User list')

    res.send(
       {"user" :[ 
       {
            "first_name": "Evaristo Maria",
            "last_name":  "Perez de las Peñas Altas",
            "phone" : "3125849098"
        }]}
    )
})

//put actualizar un registro
router.patch('/update_user/user_id', (req, res) =>{
    //res.send('User list')

    res.send(
       {"user" :[ 
       {
            "first_name": "Evaristo Maria",
            "last_name":  "Perez de las Peñas Altas",
            "phone" : "3125849098-315252888"
        }]}
    )
})
 
//delete para eliminar  un registro
router.delete('/delete_user/user_id', (req, res) =>{
    //res.send('User list')

    res.send(
       {"user" :[ 
       {       
            "first_name": "Alejandroa",
            "last_name":  "Roncancio",
            "phone" : "3225991382"       
        },
            {"Message": "User Deleted!!!"}
    ]}
    )

})

let server = app.listen( PORT, ()=>{
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})