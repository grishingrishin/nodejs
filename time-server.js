const net = require('net');
const port = process.argv[2];

const zeroFill = n => (n < 10 ? '0' : '') + n;

const server = net.createServer(socket => {
    const d = new Date();
    const year = zeroFill(d.getFullYear());
    const month = zeroFill(d.getMonth() + 1);
    const day = zeroFill(d.getDate());
    const hour = zeroFill(d.getHours());
    const minutes = zeroFill(d.getMinutes());
    const customDate = `${year}-${month}-${day} ${hour}:${minutes}\n`;

    socket.end(customDate);
});

server.listen(port);
