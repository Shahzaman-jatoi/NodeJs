const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('./htmlFileDisplaying.htm');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(fileContent);
}).listen(80);