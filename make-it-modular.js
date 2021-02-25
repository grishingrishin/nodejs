const dirPath = process.argv[2];
const filesExtensions = process.argv[3];
const mymodule = require('./solutionFilter.js');

function cb(err, data) {
    if (err) throw err;
    const lines = data.join('\n');
    return console.log(lines);
}

mymodule(dirPath, filesExtensions, cb);
