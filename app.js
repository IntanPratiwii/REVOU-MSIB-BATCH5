//console.log("ini jalan kodenya dari app.js")

//klo kita mau make module http builtin dari node js, kita perlu import terlebih dahulu
//import dotenv agar file ini bisa menmbaca variabel yang disembunyikan oleh .env
require("dotenv").config();
// kalau di dotenv ada variabel yang namanya PORT dia bakal pkae variabel yg dari dotenv, kallo ga 
// ada dia bakal pake defaultnya oleh .env
const PORT = process.env.PORT || 3000;

const data_dummy = [{
    nama: "udin chaniago",
    asal: "padang",
    hobi: "tidur"
}, {
    nama: "abdul harry",
    asal: "bandung",
    hobi: "mancing"
}
];
const http = require("http");
//atau
const server = http.createServer( function (request, response){
    //console.log(request)
    if (request.url === "/") {
        response.write("ini punya intan");
        response.end(); //agar loadingnya berhenti
    }
    if (request.url === "/hello") {
        response.write("hello world");
        response.end();
    }
    if (request.url === "/data") {
        response.writeHead(200, {
            'content-Type': 'application/json' });
        response.write(JSON.stringify(data_dummy));
        response.end();
    }
});


//server.listen(PORT,)
server.listen(3000, () => {
    console.log('server sedang berjalan pada url dan port http://localhost:3000')
});


//kalo misal kita cuma mau pke beberapa modul aja yg ada dari http kita bisa pake
//const { } namanya destructuring object
//const { creatServer } = require ('http')
//atau
//const server2 = createServer()