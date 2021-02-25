const fs = require('fs');
const path = require('path');

module.exports = (dirPath, filesExtensions, cb) => {
    fs.readdir(dirPath, (err, list) => {
        if (err) throw cb(err);
        const filtered = list.filter(file => path.extname(file) == `.${filesExtensions}`);
        return cb(null, filtered);
    });
};
