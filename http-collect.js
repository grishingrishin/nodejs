const http = require('http');
const bl = require('bl');

http.get(process.argv[2], res => {
    const { statusCode } = res;

    if (statusCode !== 200) {
        const error = new Error(`Response failed \n Status code: ${statusCode}`);
        console.error(error);
        res.resume();
        return;
    }

    res.setEncoding('utf-8');

    res.pipe(
        bl((err, data) => {
            if (err) throw err;
            const length = data.length;
            const str = data.toString();
            return console.log(`${length}\n${str}`);
        })
    );
});
