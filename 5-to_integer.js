const firstArg = process.argv[2];
const number = parseInt(firstArg);

if (firstArg === undefined || isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}