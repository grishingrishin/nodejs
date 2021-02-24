// Declarative
const numbers = process.argv.slice(2);
if (!numbers.length) throw new Error('Numbers is not defined');
const sum = numbers.reduce((a, b) => +a + +b);

// Imperative
// const argv = process.argv;
// let sum = 0;

// for (let i = 2, len = argv.length; i < len; i++) {
//   sum += Number(argv[i]);
// }

console.log(sum);
