const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);

const cb = res => {
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
            const str = data.toString();
            console.log(str);
            return;
        })
    );
};

urls.forEach(url => http.get(url, cb));
