const http = require('http');

http.get(process.argv[2], res => {
    const { statusCode } = res;

    if (statusCode !== 200) {
        const error = new Error(`Request failed \n Status code: ${statusCode}`);
        console.error(error);
        res.resume();
        return;
    }

    res.setEncoding('utf-8');

    let buffer = '';

    res.on('data', chunk => (buffer += `${chunk}\n`));
    res.on('end', () => console.log(buffer));
}).on('error', e => console.log(`Got error: ${e.message}`));
