const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  const input = line.split(' ');
  const sum = Number(input[0]) + Number(input[1]);
  console.log(sum);
}).on("close", () => {
  process.exit();
});
