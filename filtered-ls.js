const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const filesExtensions = process.argv[3];

fs.readdir(dirPath, (err, list) => {
    try {
        const filtered = list.filter(file => path.extname(file) == `.${filesExtensions}`);
        const lines = filtered.join('\n');
        console.log(lines);
    } catch (e) {
        throw err;
    }
});
