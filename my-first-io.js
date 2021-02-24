const fs = require('fs');
const filePath = process.argv[2];

// prettier-ignore
console.log(fs.readFileSync(filePath, "utf-8").toString().split("\n").length - 1);
