// creating my first server on nodejs

const http = require('http');
http.createServer((req , res) => {
    res.write("<h1>Hello this is my first Online Server</h1>");
    res.write("<h2> My name is Shahzaman and currently I am learning <br> <h1>NODEJS</h1></h2>");
    res.write("<h2>Now my server is working live on internet</h2>");
    res.write("<h2>Now my server is working live on internet</h2>");
    res.write("<h2>Now my server is working live on internet</h2>");

    res.end();
}).listen(8080);
