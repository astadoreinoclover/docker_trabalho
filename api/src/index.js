// import express from "express";

// const app = express();

// import path from 'path';
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// app.get('/', function(request, response) {

//     response.sendFile(__dirname + "/index.html")
// })

// app.listen(9001, '0.0.0.0', function() {
//     console.log('Lendo porta 9001');
// })

import express from "express";
import path from 'path';

const app = express();



const __dirname = path.resolve();
app.use(express.static(__dirname));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9001, '0.0.0.0', function() {
    console.log('Listening on port 9001');
});