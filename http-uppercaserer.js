const { createServer } = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = createServer((req, res) => {
    if (req.method !== 'POST') throw new Error('send me a POST\n');
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
    return;
});

server.listen(port);
