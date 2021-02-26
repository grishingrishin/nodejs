const { createServer } = require('http');
const { createReadStream } = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = createServer((req, res) => {
    const readStream = createReadStream(file);
    readStream.pipe(res);
    return;
});

server.listen(port);
