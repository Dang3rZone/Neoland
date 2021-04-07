const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Entra petición');
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.end('Hola Server Node V3!');
    } else {
        res.end('Error!!');
    }
});

server.listen(3000);